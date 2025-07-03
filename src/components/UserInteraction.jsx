import Testimonials from './Testimonials';
import Form from './Form';

export default function UserInteraction() {
    return (
        <section className="bg-green-light w-full">
            <div className="px-6 sm:px-12 flex flex-col lg:flex-row gap-8 items-start justify-center max-w-screen-xl mx-auto py-12">
                <Form />
                <Testimonials />
            </div>
        </section>
    );
}
