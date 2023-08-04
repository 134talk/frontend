interface Props {
  lineColor: string;
  fillColor: string;
  size?: string;
}

export default function CardImg({ lineColor, fillColor, size }: Props) {
  return (
    <svg
      width={size ? size : '6.25rem'}
      height={size ? size : '6.25rem'}
      viewBox="0 0 243 243"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M111.5 5.7735C117.688 2.20085 125.312 2.20085 131.5 5.7735L216.722 54.9765C222.91 58.5492 226.722 65.1517 226.722 72.297V170.703C226.722 177.848 222.91 184.451 216.722 188.023L131.5 237.227C125.312 240.799 117.688 240.799 111.5 237.227L26.2779 188.023C20.0899 184.451 16.2779 177.848 16.2779 170.703V72.297C16.2779 65.1517 20.0899 58.5492 26.2779 54.9765L111.5 5.7735Z"
        fill={lineColor}
      />
      <path
        d="M112 13.7735C118.188 10.2008 125.812 10.2008 132 13.7735L210.727 59.2265C216.915 62.7992 220.727 69.4017 220.727 76.547V167.453C220.727 174.598 216.915 181.201 210.727 184.773L132 230.227C125.812 233.799 118.188 233.799 112 230.227L33.2731 184.773C27.0851 181.201 23.2731 174.598 23.2731 167.453V76.547C23.2731 69.4017 27.0851 62.7992 33.2731 59.2265L112 13.7735Z"
        fill={fillColor}
      />
    </svg>
  );
}
