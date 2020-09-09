import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    }
    render() {
        return (<div className="control-section">
          <FileManagerComponent id="file" view="LargeIcons" ajaxSettings={{
            downloadUrl: this.hostUrl + 'api/FileManager/Download',
            getImageUrl: this.hostUrl + "api/FileManager/GetImage",
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            url: this.hostUrl + "api/FileManager/FileOperations"
        }}>
              <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
          </FileManagerComponent>
      </div>);
    }
}
 
                
//AWS LINK
/*
import * as React from 'react';
import { SampleBase } from '../common/sample-base';
import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar, ContextMenu } from '@syncfusion/ej2-react-filemanager';
// File Manager sample with Amazon S3 file provider service
export class AmazonS3Provider extends SampleBase {
    constructor() {
        super(...arguments);
        this.hostUrl = "https://amazons3.azurewebsites.net/api/AmazonS3Provider/";
    }
    render() {
        return (<div>
                <div className="control-section">
                    <FileManagerComponent id="filemanager" ajaxSettings={{
            url: this.hostUrl + 'AmazonS3FileOperations',
            getImageUrl: this.hostUrl + 'AmazonS3GetImage',
            uploadUrl: this.hostUrl + 'AmazonS3Upload',
            downloadUrl: this.hostUrl + 'AmazonS3Download'
        }} searchSettings={{ allowSearchOnTyping: false }}>
                    <Inject services={[NavigationPane, DetailsView, Toolbar, ContextMenu]}/>
                    </FileManagerComponent>
                </div>
            </div>);
    }
}
*/               
