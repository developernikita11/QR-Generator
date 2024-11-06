import "./qrCode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCode = () => {
  const [selectType, setSelectType] = useState("url");
  const [showModalQR, setShowModalQR] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [vCardDetails, setVCardDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [qrSize, setQRSize] = useState(120);
  const canvasRef = useRef(null);

  function handleClick(e) {
    setSelectType(e.target.value);
    setInputValue("");
    setVCardDetails({ name: "", email: "", phoneNumber: "" });
  }

  const handleDownloadQR = () => {
    const canvas = canvasRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.png";
    link.click();
  };

  const handleShareQR = async () => {
    try {
      const canvas = canvasRef.current.querySelector("canvas");
      const url = canvas.toDataURL("image/png");

      if (navigator.share) {
        await navigator.share({
          title: "QR Code",
          text: "Check out this QR Code!",
          files: [
            new File([await (await fetch(url)).blob()], "qr-code.png", {
              type: "image/png",
            }),
          ],
        });
      } else {
        alert("Share functionality is not supported on this device.");
      }
    } catch (error) {
      console.error("Error sharing the QR code:", error);
    }
  };

  const getQRCodeValue = () => {
    switch (selectType) {
      case "url":
      case "text":
        return inputValue;
      case "email":
        return `mailto:${inputValue}`;
      case "contact":
        return `tel:${inputValue}`;
      case "vcard":
        return `BEGIN:VCARD\nVERSION:3.0\nFN:${vCardDetails.name}\nTEL:${vCardDetails.phoneNumber}\nEMAIL:${vCardDetails.email}\nEND:VCARD`;
      default:
        return inputValue;
    }
  };

  function handleGenerateQR() {
    setShowModalQR(true);
  }

  return (
    <div className="container QR-Container p-4 mt-5">
      <h2>QR-Code Generator</h2>

      <div className="button-container mt-4 mb-3 mx-4">
        <span>Select:</span>
        <div className="select-container">
          <button
            type="button"
            className="btn btn-outline-success select-button"
            value="text"
            onClick={handleClick}
          >
            text
          </button>
          <button
            type="button"
            className="btn btn-outline-success select-button"
            value="url"
            onClick={handleClick}
          >
            url
          </button>
          <button
            type="button"
            className="btn btn-outline-success select-button"
            value="email"
            onClick={handleClick}
          >
            email
          </button>
          <button
            type="button"
            className="btn btn-outline-success select-button"
            value="contact"
            onClick={handleClick}
          >
            contact no.
          </button>
          <button
            type="button"
            className="btn btn-outline-success select-button"
            value="vcard"
            onClick={handleClick}
          >
            vcard
          </button>
        </div>
      </div>

      <div className="mx-4 mb-3">
        {selectType === "vcard" ? (
          <>
            <input
              type="text"
              className="input-field mb-2"
              placeholder="Name"
              value={vCardDetails.name}
              onChange={(e) =>
                setVCardDetails({ ...vCardDetails, name: e.target.value })
              }
            />
            <input
              type="email"
              className="input-field mb-2"
              placeholder="Email"
              value={vCardDetails.email}
              onChange={(e) =>
                setVCardDetails({ ...vCardDetails, email: e.target.value })
              }
            />
            <input
              type="tel"
              className="input-field mb-2"
              placeholder="Phone Number"
              value={vCardDetails.phoneNumber}
              onChange={(e) =>
                setVCardDetails({
                  ...vCardDetails,
                  phoneNumber: e.target.value,
                })
              }
            />
          </>
        ) : (
          <input
            type="text"
            className="input-field"
            value={inputValue}
            placeholder={
              selectType === "text"
                ? "Input Text"
                : selectType === "url"
                ? "Input URL"
                : selectType === "email"
                ? "Input Email"
                : selectType === "contact"
                ? "Input Contact No."
                : "Input URL"
            }
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}
      </div>

      <div className="mx-4 mb-4">
        <span className="me-2">Size:</span>
        <input
          type="number"
          className="size-input"
          value={qrSize}
          onChange={(e) => setQRSize(parseInt(e.target.value, 10))}
        />
        <span className="me-1">px</span>
      </div>

      <div className="text-center">
        {showModalQR ? (
          <>
            <FontAwesomeIcon
              icon={faDownload}
              onClick={handleDownloadQR}
              className="icon-button me-2"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              onClick={handleShareQR}
              className="icon-button"
            />
            <div ref={canvasRef}>
              <QRCodeCanvas
                value={getQRCodeValue()}
                size={qrSize > 120 ? qrSize : 150}
                className="qr-code mb-2"
              />
            </div>
          </>
        ) : (
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleGenerateQR}
          >
            Generate QR
          </button>
        )}
      </div>
    </div>
  );
};

export default QRCode;
