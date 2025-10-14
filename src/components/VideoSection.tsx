export default function VideoSection() {
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-10 uppercase tracking-widest">
        Watch Our Latest Music Video
      </h2>
      
      <div className="max-w-5xl mx-auto px-4">
        {/* Responsive aspect ratio container for the video */}
        <div className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full border-none"
            // Replace the 'src' with your actual YouTube or Vimeo embed URL
            src="https://www.youtube.com/embed/ePjFCaPMpo4?si=H6-XK5RHWPno9zMn" 
            title="Hate Machine Music Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}