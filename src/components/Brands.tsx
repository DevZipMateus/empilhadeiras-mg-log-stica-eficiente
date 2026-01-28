import { ScrollReveal } from '@/hooks/use-scroll-reveal';

import brand1 from '@/assets/brands/brand-1.avif';
import brand2 from '@/assets/brands/brand-2.avif';
import brand3 from '@/assets/brands/brand-3.avif';
import brand4 from '@/assets/brands/brand-4.avif';
import brand5 from '@/assets/brands/brand-5.avif';
import brand6 from '@/assets/brands/brand-6.avif';
import brand7 from '@/assets/brands/brand-7.avif';
import brand8 from '@/assets/brands/brand-8.avif';
import brand9 from '@/assets/brands/brand-9.avif';
import brand10 from '@/assets/brands/brand-10.avif';

const brands = [
  { src: brand1, alt: 'Marca parceira 1' },
  { src: brand2, alt: 'Marca parceira 2' },
  { src: brand3, alt: 'Marca parceira 3' },
  { src: brand4, alt: 'Marca parceira 4' },
  { src: brand5, alt: 'Marca parceira 5' },
  { src: brand6, alt: 'Marca parceira 6' },
  { src: brand7, alt: 'Marca parceira 7' },
  { src: brand8, alt: 'Marca parceira 8' },
  { src: brand9, alt: 'Marca parceira 9' },
  { src: brand10, alt: 'Marca parceira 10' },
];

const Brands = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary mb-3 sm:mb-4">
              Marcas com as Quais Trabalhamos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Trabalhamos com as principais marcas do mercado de empilhadeiras e equipamentos de movimentação
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4 sm:gap-6 items-center justify-items-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center w-full aspect-square"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-h-12 sm:max-h-16 md:max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Brands;
