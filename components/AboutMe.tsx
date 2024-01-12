import aboutMeStyles from "../styles/aboutMeStyles.module.css"

export default function AboutMe() {
    return <section>
        <h2 className={aboutMeStyles.label}>About me</h2>
        <div className={aboutMeStyles.container}>
            <div className="left">
                <p>Hello, my name is Ria, and I&#39;m a front-end engineer currently splitting my time between San Francisco, Dallas, and New York. I enjoy using my experience as a former marketer and practicing my user-empathy to build enjoyable user experiences that convert to measurable results.</p>

                <p>My last few roles have been focused on working with planning and implementation of design systems and customizing component libraries. I enjoy learning from others, and often find myself in mentoring roles. I am also a former conference speaker at UT Dallas DevFest by Google Developers Group.</p>

                <p>Some technologies Ive been working with:</p>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>React-Native</li>
                    <li>TypeScript</li>
                    <li>Design Systems</li>
                    <li>MUI</li>
                </ul>

                <p>Currently excited about:</p>
                <ul>
                    <li>Mobile Native Development (Swift, Objective-C)</li>
                    <li>Contributing to Open Source</li>
                    <li>UX Research & Design</li>
                </ul>
            </div>
            <div className="right">
                <h1>some photo</h1>
            </div>

        </div>



    </section>
}