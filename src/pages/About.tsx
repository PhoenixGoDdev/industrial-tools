import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4">About Industrial Tools</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Leading the industry with innovative, durable, and high-performance tools since 1985
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="card-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 mb-4 rounded-full hero-gradient flex items-center justify-center">
                <Target className="text-primary-foreground" size={32} />
              </div>
              <h2 className="mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower professionals worldwide with innovative, reliable, and high-performance tools
                that exceed expectations and stand the test of time. We are committed to engineering
                excellence and customer satisfaction in every product we deliver.
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 mb-4 rounded-full hero-gradient flex items-center justify-center">
                <Eye className="text-primary-foreground" size={32} />
              </div>
              <h2 className="mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the global leader in industrial tools and equipment, recognized for innovation,
                quality, and sustainability. We envision a future where every professional has access
                to tools that enhance productivity, safety, and craftsmanship.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-shadow hover:card-shadow-hover transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="mb-3">Quality Excellence</h3>
                <p className="text-muted-foreground">
                  Every tool undergoes rigorous testing to ensure it meets our highest standards of
                  durability and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-shadow hover:card-shadow-hover transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="mb-3">Customer First</h3>
                <p className="text-muted-foreground">
                  We listen to our customers and continuously innovate to meet the evolving needs
                  of professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-shadow hover:card-shadow-hover transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="text-primary" size={32} />
                </div>
                <h3 className="mb-3">Innovation Driven</h3>
                <p className="text-muted-foreground">
                  We invest in research and development to bring cutting-edge technology to our
                  product lineup.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Story */}
        <Card className="card-shadow">
          <CardContent className="p-8 md:p-12">
            <h2 className="mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1985, Industrial Tools began with a simple mission: to provide
                professionals with reliable, high-quality tools they could trust. What started as
                a small workshop has grown into a global leader in industrial equipment manufacturing.
              </p>
              <p>
                Over the decades, we've built our reputation on innovation, durability, and
                exceptional customer service. Our tools are used by professionals in construction,
                manufacturing, automotive, and countless other industries around the world.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible, integrating the latest
                technology with time-tested engineering principles. Our commitment to quality and
                performance remains unwavering, ensuring that every tool bearing our name lives up to
                the trust professionals place in us.
              </p>
              <p>
                With distribution centers across the globe and a dedicated team of engineers and
                support staff, we're proud to serve professionals who demand nothing but the best
                from their tools.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
