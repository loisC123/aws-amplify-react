import React, { useState } from 'react';

function UserDashboard() {
  const [newFolderName, setNewFolderName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleCreateFolder = (e) => {
    e.preventDefault();
    // 實現創建資料夾的邏輯
    console.log(`Creating folder: ${newFolderName}`);
    setNewFolderName('');
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    if (selectedFile) {
      // 實現文件上傳邏輯
      console.log(`Uploading file: ${selectedFile.name}`);
      setSelectedFile(null);
    }
  };

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <div className="create-folder">
        <h3>Create New Folder</h3>
        <form onSubmit={handleCreateFolder}>
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            placeholder="New folder name"
          />
          <button type="submit">Create Folder</button>
        </form>
      </div>
      <div className="file-upload">
        <h3>Upload File</h3>
        <form onSubmit={handleFileUpload}>
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default UserDashboard;