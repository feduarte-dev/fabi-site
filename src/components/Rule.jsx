export default function Rule({ fillColor }) {
    return (
        <div className="wave-divider">
            <svg
                className="w-full h-16 md:h-32 "
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill={fillColor}
                    d="M0,160L60,176C120,192,240,224,360,213.3C480,203,600,149,720,122.7C840,96,960,96,1080,117.3C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
}