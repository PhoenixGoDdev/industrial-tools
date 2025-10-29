import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Book, Wrench } from "lucide-react";

const Downloads = () => {
  const documents = [
    {
      category: "Product Catalogs",
      icon: Book,
      items: [
        { name: "Power Tools Catalog 2024", size: "12.5 MB", type: "PDF" },
        { name: "Abrasives & Accessories", size: "8.2 MB", type: "PDF" },
        { name: "Complete Product Range", size: "25.4 MB", type: "PDF" },
      ],
    },
    {
      category: "User Manuals",
      icon: FileText,
      items: [
        { name: "18V Drill Driver Manual", size: "2.1 MB", type: "PDF" },
        { name: "Circular Saw User Guide", size: "3.4 MB", type: "PDF" },
        { name: "Angle Grinder Manual", size: "1.8 MB", type: "PDF" },
      ],
    },
    {
      category: "Technical Specifications",
      icon: Wrench,
      items: [
        { name: "Power Tools Technical Data", size: "5.6 MB", type: "PDF" },
        { name: "Battery Specifications", size: "1.2 MB", type: "PDF" },
        { name: "Safety Standards Compliance", size: "3.8 MB", type: "PDF" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Downloads</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Access product catalogs, manuals, and technical documentation
          </p>
        </div>

        {/* Documents Grid */}
        <div className="space-y-8">
          {documents.map((section, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                  <section.icon className="text-primary-foreground" size={24} />
                </div>
                <h2>{section.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="card-shadow hover:card-shadow-hover transition-smooth"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                          <FileText className="text-primary" size={24} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium mb-1 line-clamp-2">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.type} • {item.size}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2" size={16} />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <Card className="mt-12 bg-muted/50">
          <CardContent className="p-8 text-center">
            <h3 className="mb-3">Need a Specific Document?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Button variant="default" asChild>
              <a href="/contact">Contact Support</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Downloads;
