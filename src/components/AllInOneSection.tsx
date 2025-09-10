import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import allInOneImage from "@/assets/all-in-one-section.webp";
export const AllInOneSection = () => {
  return (
    <div className="section-spacing">
      <div className="container mx-auto">
        <ContainerScroll
          titleComponent={
            <h2 className="text-4xl md:text-6xl font-bold text-center gradient-text mb-8">
              Tudo em Um Só Lugar
            </h2>
          }
        >
          <img
            src={allInOneImage}
            alt="LABVIDIA - Tudo em um só lugar"
            className="mx-auto rounded-2xl object-cover w-full"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
};