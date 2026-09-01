import React from 'react';

function VideoContentSection({
    video,
    title,
    highlight,
    description,
    buttonText,
    buttonLink = '#',
}) {
    return (
        <section className="legacy ">
            <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="legacy-content container">
                <h2>
                    {title} <span>{highlight}</span>
                </h2>

                <p>{description}</p>

                <a href={buttonLink}>
                    {buttonText}
                    <img src="/images/right.png" alt="" />
                </a>
            </div>
        </section>
    );
}

export default VideoContentSection;