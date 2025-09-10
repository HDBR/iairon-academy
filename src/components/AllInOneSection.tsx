import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import allInOneImage from "@/assets/all-in-one-section.webp";

export const AllInOneSection = () => {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <ContainerScroll
          titleComponent={
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text">
                Tudo o que você precisa em um só lugar
              </span>
            </h2>
          }
        >
          <img 
            src={allInOneImage} 
            alt="Tudo o que você precisa em um só lugar - Interface do curso LABVIDIA"
            className="mx-auto rounded-2xl object-cover h-full w-full object-center"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
};