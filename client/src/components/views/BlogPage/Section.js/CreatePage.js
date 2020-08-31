import React, { useEffect, useState } from 'react'
import QuillEditor from '../../../editor/QuillEditor';
import { Typography, Button, Form, message } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
import './Preview.css';
/* import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'; */
import Modal from 'react-modal';

const { Title } = Typography;


function CreatePage(props) {
    const user = useSelector(state => state.user);

    const [content, setContent] = useState("")
    const [files, setFiles] = useState([])

    const customStyles = {
        content : {
          top                   : '5px',
          left                  : '5px',
          right                 : '5px',
          bottom                : '5px',
         /*  transform             : 'translate(-50%, -50%)' */
        }
      };
      
    

    const onEditorChange = (value) => {
        setContent(value)
        console.log(content)
    }

    const onFilesChange = (files) => {
        setFiles(files)
    }

    const [showViews, setShowViews] = useState(false);
   

        var subtitle;
        const [modalIsOpen,setIsOpen] = React.useState(false);
        function openModal() {
          setIsOpen(true);
        }
       
        function afterOpenModal() {
          // references are now sync'd and can be accessed.
          subtitle.style.color = 'black';
        }
       
        function closeModal(){
          setIsOpen(false);
        } 


    const onSubmit = (event) => {
        event.preventDefault();

        setContent("");

        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }

        const variables = {
            content: content,
            userID: user.userData._id
        }

        axios.post('/api/blog/createPost', variables)
            .then(response => {
                if (response) {
                    message.success('Course Created!');

                    setTimeout(() => {
                        props.history.push('/blog')
                    }, 2000);
                }
            })
    }


    return (

        <React.Fragment>
            {/* BLOCK 1 */}
            <div style={{ maxWidth: '592px', display:'inline-block' , margin: '2rem 11rem', verticalAlign:'top'}} >

                    <div style={{ textAlign: 'center' }}>
                        <Title level={3} > Editor </Title>
                    </div>

                    <QuillEditor
                        placeholder={"Start creating your course...."}
                        onEditorChange={onEditorChange}
                        onFilesChange={onFilesChange}   
                    />

                   
                        <div style={{ textAlign: 'center', margin: '2rem', }}>
                            <Button
                                size="large"
                                onClick={openModal}
                            >
                                Next
                            </Button>
                        </div>
 

                    <div style={{ textAlign: 'center', margin: '2rem', }}>
                            <Button
                                size="large"
                                htmlType="submit"
                                onClick={()=>setShowViews(true)}
                                
                    
                            >
                                Views
                        </Button>
                    </div>

            </div>

            {/* BLOCK 2 */}

            {
                showViews && (
                    <React.Fragment>    
                        <div style={{display:'inline-block', marginTop: '20px' }}>
                            <center><Title level={3} > Mobile View </Title></center>  
                            <div class="mv"  >
                                <div id = 'scfix' dangerouslySetInnerHTML={{ __html:content }} />
                            </div>
                        </div>

                        <div style={{margin:'5em', alignSelf:'center'}}>
                            <center><Title level={3} > Tablet View </Title></center>     
                            <div class="tv" dangerouslySetInnerHTML={{ __html:content }} />
                        </div>
                    </React.Fragment>
                )
            }
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <center><h2 ref={_subtitle => (subtitle = _subtitle)}>Preview</h2></center>
          <p dangerouslySetInnerHTML={{ __html:content }} />
          <center>
          <Button size="large" className="sb" onClick={closeModal}>Keep Editing</Button>
          <Form onSubmit={onSubmit}>
                        
                            <Button
                                size="large"
                                htmlType="submit"
                                className=""
                                onSubmit={onSubmit}
                            >
                                Save
                            </Button>
                      
                    </Form>
          </center>
        </Modal>
        </React.Fragment>

    )
}

export default CreatePage;

 
