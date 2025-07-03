export default function TestimonialsCard({ name, text }) {
    return (
        <div className="bg-earth-warm rounded-xl shadow-md p-6 w-full max-w-md mx-auto text-center space-y-4">
            <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, idx) => (
                    <svg
                        key={idx}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                ))}
            </div>
            <p className="text-earth-mid italic">"{text}"</p>
            <p className="text-sm font-semibold text-earth-mid">{name}</p>
        </div>
    );
}
