export function TextProjects(props:any) {

    return (
        <section className="relative text-start md:p-16 p-8 bg-white">
            <h3 className="md:text-6xl text-4xl text-darkBlue mb-4">{props.h3}</h3>
            <p className="md:w-6/12 text-xl">{props.p}</p>
        </section>
    );
}

