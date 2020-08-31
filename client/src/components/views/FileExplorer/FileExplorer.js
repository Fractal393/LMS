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