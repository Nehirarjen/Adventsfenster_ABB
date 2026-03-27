import { QRCodeSVG } from 'qrcode.react';

interface QRCodeProps {
  day: number;
  size?: number;
  color?: string;
}

const QRCode: React.FC<QRCodeProps> = ({ day, size = 120, color = '#FFFFFF' }) => {
  const qrValue = JSON.stringify({
    type: 'AdventCalendar',
    day,
    year: new Date().getFullYear()
  });

  return (
    <div className="qr-wrapper">
      <QRCodeSVG
        value={qrValue}
        size={size}
        bgColor="transparent"
        fgColor={color}
        level="M"
      />
      <p className="qr-label">Tag {day}</p>
    </div>
  );
};

export default QRCode;
