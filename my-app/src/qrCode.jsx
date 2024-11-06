import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import './qrCode.css';


function QRCode() {
  return (
    <div className="container QR-Container p-4 mt-5">
      <h2 style={{ textAlign: "center", color: "#0C111A", fontWeight: "bold" }}>
        QR-Code Generator
      </h2>
      <div className="button-container mt-4 mb-3 mx-4">
        <span className="">Select:</span>
        <div className="select-container">
          <button
            type="button"
            className="btn btn-outline-success me-2"
            style={{
              height: "28px",
              textAlign: "center",
              lineHeight: "2px",
              fontSize: "14px",
            }}
            
          >
            text
          </button>
          <button
            type="button"
            className="btn btn-outline-success me-2"
            style={{
              height: "28px",
              textAlign: "center",
              lineHeight: "2px",
              fontSize: "14px",
            }}
            
          >
            url
          </button>
          <button
            type="button"
            className="btn btn-outline-success me-2"
            style={{
              height: "28px",
              textAlign: "center",
              lineHeight: "2px",
              fontSize: "14px",
            }}
            
          >
            email
          </button>
          <button
            type="button"
            className="btn btn-outline-success me-2"
            style={{
              height: "28px",
              textAlign: "center",
              lineHeight: "2px",
              fontSize: "14px",
            }}
            
          >
            contact no.
          </button>
          <button
            type="button"
            className="btn btn-outline-success me-2"
            style={{
              height: "28px",
              textAlign: "center",
              lineHeight: "2px",
              fontSize: "14px",
            }}
            
          >
            vcard
          </button>
        </div>
      </div>

      <div className="mx-4 mb-3">
       
        
            <input
              type="text"
              className="w-100 p-1 mb-2 border-light border rounded"
              
              placeholder="placeholder"
              
            />
          
    
         
            
            
            
           
          
    
      </div>
      <div className="mx-4 mb-4">
        <span className="me-2">Size:</span>
        <input
          type="number"
          style={{ width: "60px" }}
          className="border rounded"
         
         
        />
        <span className="me-1">px</span>
      </div>
      <div className="text-center">

          <>
            <FontAwesomeIcon
              icon={faDownload}
              className="me-2 p-2 mb-2"
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "white",
                color: "#7d7d7d",
                cursor: "pointer",
              }}
             
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className="p-2 mb-2"
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "white",
                color: "#7d7d7d",
                cursor: "pointer",
              }}
              
            />
            
          </>
        
          <button
            type="button"
            className="mb-4 btn btn-danger"
           
          >
            Generate QR
          </button>
    
      </div>
    </div>
  );
}
export default QRCode;
