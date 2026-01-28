import { useEffect, useCallback } from 'react';
import { ScrollReveal } from '@/hooks/use-scroll-reveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useState } from 'react';

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

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
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {brands.map((brand, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center aspect-square">
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="max-h-20 sm:max-h-24 md:max-h-28 lg:max-h-32 w-auto object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Indicadores de navegação */}
          <div className="flex justify-center gap-2 mt-6">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Ir para marca ${index + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Brands;
