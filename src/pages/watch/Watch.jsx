import "./Watch.css";
import { ArrowBackOutlined } from "@mui/icons-material";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://www.youtube.com/watch?v=WbliHNs4q14"
      />
    </div>
  );
}
