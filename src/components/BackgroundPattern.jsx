function BackgroundPattern({ opacity = "opacity-10", borderColor = "border-white/20" }) {
  return (
    <div className={`absolute inset-0 ${opacity}`}>
      <div className={`absolute top-16 left-16 w-28 h-28 border ${borderColor} rounded-full`}></div>
      <div className={`absolute top-32 right-16 w-20 h-20 border ${borderColor} rounded-full`}></div>
      <div className={`absolute bottom-32 left-24 w-36 h-36 border ${borderColor} rounded-full`}></div>
      <div className={`absolute bottom-16 right-32 w-24 h-24 border ${borderColor} rounded-full`}></div>
    </div>
  );
}

export default BackgroundPattern;
