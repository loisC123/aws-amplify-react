import React, { useState, useEffect } from 'react';

function DownloadArea() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // 這裡應該從後端 API 獲取可下載文件列表
    // 例如: fetchAvailableFiles().then(data => setFiles(data));
  }, []);

  const handleDownload = (fileId) => {
    // 實現下載邏輯
    console.log(`Downloading file with id: ${fileId}`);
  };

  return (
    <div className="download-area">
      <h2>Available Downloads</h2>
      <ul>
        {files.map(file => (
          <li key={file.id}>
            {file.name}
            <button onClick={() => handleDownload(file.id)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DownloadArea;