import { useDropzone } from "react-dropzone";
import "css.gg/icons/scss/software-upload.scss";
const HeadbarInput = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file) => <li>{file.path}</li>);
  return (
    <div className="headbarInput">
      <div className="headbarInput__inner">
        <form action="">
          <input type="text" placeholder="How did you do today?" />
          <div {...getRootProps({ className: "inputfile" })}>
            <input {...getInputProps()} />
            <p>
              <i className="gg-software-upload"></i>Drag 'n' drop some files
              here, or click to select files
            </p>
          </div>
          <ul>{files}</ul>
        </form>
      </div>
    </div>
  );
};

export default HeadbarInput;
