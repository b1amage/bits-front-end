import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorForm = ({
  editorState,
  handleEditorChange,
  uploadImageCallBack,
}) => {
  // const createMarkup = (html) => {
  // 	console.log(html);
  // 	return {
  // 		__html: DOMPurify.sanitize(html),
  // 	};
  // };

  // const uploadImageCallBack = (file) => {
  // 	return new Promise((resolve, reject) => {
  // 		const data = new FormData();
  // 		data.append("image", file);
  // 		axios
  // 			.post("https://bits-gt8m.onrender.com/api/image/upload-image", data, {
  // 				headers: {
  // 					"Content-Type": "multipart/form-data",
  // 				},
  // 			})
  // 			.then((res) => {
  // 				console.log(res.image.src);
  // 				resolve({ data: { url: res.image.src } });
  // 			})
  // 			.catch((err) => {
  // 				reject(err);
  // 			});
  // 	});
  // 	// handlePastedFiles(files)
  // };

  // const handlePastedFiles = (files) => {
  // 	const formData = new FormData();
  // 	formData.append("file", files[0]);
  // 	fetch("http://localhost:8080/api/image/upload-image", {
  // 		method: "POST",
  // 		body: formData,
  // 	})
  // 		.then((res) => res.json())
  // 		.then((data) => {
  // 			if (data.image.src) {
  // 				setEditorState(insertImage(data.image.src)); //created below
  // 			}
  // 		})
  // 		.catch((err) => {
  // 			console.log(err);
  // 		});
  // };

  // const insertImage = (url) => {
  // 	const contentState = editorState.getCurrentContent();
  // 	const contentStateWithEntity = contentState.createEntity(
  // 		"IMAGE",
  // 		"IMMUTABLE",
  // 		{ src: url }
  // 	);
  // 	const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  // 	console.log("key: " + entityKey);
  // 	const newEditorState = EditorState.set(editorState, {
  // 		currentContent: contentStateWithEntity,
  // 	});
  // 	return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, "");
  // };

  return (
    <Editor
      placeholder="Write your story"
      editorState={editorState}
      onEditorStateChange={handleEditorChange}
      wrapperClassName="max-h-[70vh] h-full flex flex-col justify-end w-full py-4 w-full"
      editorClassName="editor w-full !h-fit shadow-md outline-none resize-none box-border rounded-2xl px-6"
      toolbarClassName="!h-fit !rounded-2xl w-full"
      toolbarOnFocus
      toolbar={{
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        image: {
          uploadEnabled: true,
          uploadCallback: uploadImageCallBack,
          previewImage: true,
          inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
          alt: { present: false, mandatory: false },
          defaultSize: {
            height: "auto",
            width: "auto",
          },
        },
      }}
    />
  );
};
export default EditorForm;
