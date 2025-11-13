import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface GuitarType {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: string[];
  history: string;
  famous: string[];
}

const guitarTypes: GuitarType[] = [
  {
    id: 'bass',
    name: 'Бас-гитара',
    icon: 'Music2',
    description: 'Низкочастотная гитара с 4-6 струнами, создающая ритмическую основу композиции.',
    features: ['4-6 струн', 'Низкий строй', 'Длинная мензура', 'Мощный звук'],
    history: 'Бас-гитара появилась в 1951 году благодаря Лео Фендеру. Precision Bass стал первой массовой моделью, революционизировавшей музыкальную индустрию.',
    famous: ['Paul McCartney', 'Flea', 'Jaco Pastorius', 'Geddy Lee']
  },
  {
    id: 'classical',
    name: 'Классическая гитара',
    icon: 'Music',
    description: 'Акустическая гитара с нейлоновыми струнами, идеальная для классической музыки и фламенко.',
    features: ['Нейлоновые струны', 'Широкий гриф', 'Мягкий звук', 'Пальцевая техника'],
    history: 'Современная классическая гитара оформилась в XIX веке благодаря испанскому мастеру Антонио Торресу, установившему стандарты конструкции.',
    famous: ['Andrés Segovia', 'John Williams', 'Paco de Lucía', 'Julian Bream']
  },
  {
    id: 'electric',
    name: 'Электро-гитара',
    icon: 'Zap',
    description: 'Гитара со звукоснимателями, создающая мощный усиленный звук для рок-музыки.',
    features: ['Звукосниматели', 'Усиление звука', 'Эффекты', 'Сустейн'],
    history: 'Первые электрогитары появились в 1930-х, но революцию совершили Fender Telecaster (1950) и Gibson Les Paul (1952), ставшие иконами рока.',
    famous: ['Jimi Hendrix', 'Eric Clapton', 'Jimmy Page', 'Eddie Van Halen']
  },
  {
    id: 'acoustic',
    name: 'Акустическая гитара',
    icon: 'Music4',
    description: 'Универсальная гитара со стальными струнами, идеальная для аккомпанемента и соло.',
    features: ['Стальные струны', 'Резонансный корпус', 'Яркий звук', 'Универсальность'],
    history: 'Акустические гитары со стальными струнами развились в США в начале XX века, став основой фолк и кантри музыки.',
    famous: ['Bob Dylan', 'Johnny Cash', 'Ed Sheeran', 'Taylor Swift']
  }
];

export default function Index() {
  const [selectedGuitar, setSelectedGuitar] = useState<string | null>(null);

  const scrollToGuitar = (id: string) => {
    setSelectedGuitar(id);
    const element = document.getElementById(`guitar-${id}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-oswald font-bold mb-6 text-glow">
            GUITARS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-roboto">
            Откройте мир гитар: от классики до рока
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {guitarTypes.map((guitar) => (
              <Button
                key={guitar.id}
                onClick={() => scrollToGuitar(guitar.id)}
                variant="outline"
                size="lg"
                className="hover-scale border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <Icon name={guitar.icon as any} className="mr-2" size={20} />
                {guitar.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {guitarTypes.map((guitar, index) => (
            <Card
              key={guitar.id}
              id={`guitar-${guitar.id}`}
              className={`hover-scale cursor-pointer border-2 ${
                selectedGuitar === guitar.id ? 'border-primary' : 'border-border'
              } bg-card transition-all duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name={guitar.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-oswald">{guitar.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg">{guitar.description}</p>
                
                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="features">Особенности</TabsTrigger>
                    <TabsTrigger value="history">История</TabsTrigger>
                    <TabsTrigger value="artists">Артисты</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="features" className="space-y-2">
                    <ul className="space-y-2">
                      {guitar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Icon name="Disc3" size={16} className="text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="history" className="text-muted-foreground">
                    {guitar.history}
                  </TabsContent>
                  
                  <TabsContent value="artists">
                    <div className="flex flex-wrap gap-2">
                      {guitar.famous.map((artist, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/20 rounded-full text-sm border border-primary/30"
                        >
                          {artist}
                        </span>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>


      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="font-oswald text-sm">© 2024 GUITARS WORLD. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}