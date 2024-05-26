import React, { useState } from 'react';
// import { API } from '../../../config/constants';
// import { getToken } from '../../../utils/auth';
import FeatherIcon from 'feather-icons-react';

const FileInput = ({ name, label, types, onchange, value }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  if(!types){types = 'PDF'}
  const uploadAttachment = async (event) => {
    setIsLoading(true);
    const file = event.target.files[0];
    setFileName(file.name); // Display the selected file name

    // Validate file type
    const allowedTypes = types.toLowerCase().split(',');
    const fileType = file.type.toLowerCase().split('/');
    if (!allowedTypes.includes(fileType[1])) {
      setErrorMessage(`Invalid file type. Allowed types: ${types}`);
      setIsLoading(false);
      return;
    } else {
      setErrorMessage('');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('fieldName', event.target.name);
    try {
      const response = await fetch(API.UPDATE_METRIC_ATTACHMENT , {
        method: 'POST',
        headers: {
          token: getToken(),
        },
        body: formData,
      });
      if (response.ok) {
        let responseData = await response.json();
        responseData = responseData.data;
        onchange({[responseData.column]: responseData.filepath });
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div>
      <label htmlFor={`fileLabel${name}`} className="block text-sm text-gray-500 dark:text-gray-300 mt-3">
        {label}
      </label>
      <label
        htmlFor={`fileUpload${name}`}
        className="flex flex-col float-start items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
      >
        <input id={`fileUpload${name}`} type="file" name={name} className="hidden" accept={types} onChange={uploadAttachment} />
        {!isLoading && (
          <>
            <FeatherIcon icon="upload" strokeWidth="1" size="20"/>
            <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Upload File</h2>
            <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
              Upload or drag & drop your file {types}
            </p>
          </>
        )}
        {isLoading && (
          <div className="flex items-center justify-center w-full h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}
        {fileName && <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Selected File: {fileName}</p>}
        {errorMessage && <p className="mt-2 text-sm text-red-500">{errorMessage}</p>}
      </label>
    </div>
  );
};

export default FileInput;
