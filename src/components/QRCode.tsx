import { QRCodeSVG } from 'qrcode.react';

interface QRCodeProps {
  day: number;
  size?: number;
}

const QRCode: React.FC<QRCodeProps> = ({ day, size = 180 }) => {
  const quizUrl = `${window.location.origin}/quiz?day=${day}`;

  return (
    <a href={quizUrl} className="qr-wrapper qr-link">
      <QRCodeSVG
        value={quizUrl}
        size={size}
        bgColor="transparent"
        fgColor="#0A2A59"
        level="M"
      />
      <p className="qr-label">Tag {day}</p>
    </a>
  );
};

export default QRCode;
