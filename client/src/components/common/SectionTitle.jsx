const SectionTitle = ({
    title,
    subtitle,
}) => {

    return (

        <>

            <h2 className="section-title">

                {title}

            </h2>

            <p className="section-subtitle">

                {subtitle}

            </p>

        </>

    );

};

export default SectionTitle;