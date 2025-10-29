import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Wrench } from "lucide-react";

const ServiceRequest = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productModel: "",
    serviceType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Service Request Submitted",
      description: "We'll contact you within 24 hours to schedule your service.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      productModel: "",
      serviceType: "",
      description: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full hero-gradient flex items-center justify-center">
            <Wrench className="text-primary-foreground" size={32} />
          </div>
          <h1 className="mb-4">Service Request</h1>
          <p className="text-muted-foreground text-lg">
            Request repair, maintenance, or warranty service for your tools
          </p>
        </div>

        {/* Form */}
        <Card className="card-shadow">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="productModel">Product Model *</Label>
                  <Input
                    id="productModel"
                    name="productModel"
                    type="text"
                    required
                    value={formData.productModel}
                    onChange={handleChange}
                    placeholder="e.g., 18V Drill Driver"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="serviceType">Service Type *</Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, serviceType: value })
                  }
                  required
                >
                  <SelectTrigger id="serviceType" className="mt-2">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="warranty">Warranty Repair</SelectItem>
                    <SelectItem value="maintenance">Maintenance Service</SelectItem>
                    <SelectItem value="repair">General Repair</SelectItem>
                    <SelectItem value="parts">Parts Replacement</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Issue Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Please describe the issue you're experiencing with your tool..."
                  className="mt-2"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Service Request
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="mb-2">Service Hours</h3>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 3:00 PM
                <br />
                Sunday: Closed
              </p>
            </CardContent>
          </Card>
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond to service requests within 24 hours. Warranty repairs are
                prioritized and usually completed within 5-7 business days.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequest;
