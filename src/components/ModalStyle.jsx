const ModalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      right: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      "z-index": "40",
      padding: "10px"
    },

    content: {
      position: "absolute",
      margin: "40px",
      border: "1px solid #86BC25",
      background: "#181818",
      overflow: "scroll",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px",
    }
}

export default ModalStyle;