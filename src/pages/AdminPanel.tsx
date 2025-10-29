import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Eye, 
  EyeOff, 
  Plus, 
  Edit, 
  Trash2, 
  Upload, 
  MessageSquare,
  Package,
  Users,
  LogOut
} from "lucide-react";
import { products, categories, Product as ProductType, Category } from "@/data/products";
import { contactMessages, ContactMessage } from "@/data/messages";
import { format } from "date-fns";

// Extend the Product interface to ensure specs is included
interface Product extends ProductType {
  specs: { label: string; value: string }[];
}

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [productList, setProductList] = useState<Product[]>(products as Product[]);
  const [messageList, setMessageList] = useState<ContactMessage[]>(contactMessages);
  const [categoryList, setCategoryList] = useState<Category[]>(categories);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  // Product form state - updated to include specs
  const [productForm, setProductForm] = useState({
    id: "",
    name: "",
    category: "",
    description: "",
    image: "",
    featured: false,
    latest: false,
    specs: [] as { label: string; value: string }[],
  });

  // State for adding new spec fields
  const [newSpec, setNewSpec] = useState({ label: "", value: "" });

  // Category form state
  const [categoryForm, setCategoryForm] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
  });

  // Initialize form when editing product
  useEffect(() => {
    if (editingProduct) {
      setProductForm({
        ...editingProduct,
        featured: editingProduct.featured || false,
        latest: editingProduct.latest || false,
        specs: editingProduct.specs || [],
      });
    } else {
      setProductForm({
        id: "",
        name: "",
        category: "",
        description: "",
        image: "",
        featured: false,
        latest: false,
        specs: [],
      });
    }
  }, [editingProduct]);

  // Initialize form when editing category
  useEffect(() => {
    if (editingCategory) {
      setCategoryForm(editingCategory);
    } else {
      setCategoryForm({
        id: "",
        name: "",
        description: "",
        image: "",
      });
    }
  }, [editingCategory]);

  // Handle product form changes
  const handleProductFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    
    setProductForm({
      ...productForm,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle category form changes
  const handleCategoryFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCategoryForm({
      ...categoryForm,
      [name]: value,
    });
  };

  // Handle spec changes
  const handleSpecChange = (index: number, field: 'label' | 'value', value: string) => {
    const updatedSpecs = [...productForm.specs];
    updatedSpecs[index] = { ...updatedSpecs[index], [field]: value };
    setProductForm({ ...productForm, specs: updatedSpecs });
  };

  // Add a new spec
  const addSpec = () => {
    if (newSpec.label.trim() && newSpec.value.trim()) {
      setProductForm({
        ...productForm,
        specs: [...productForm.specs, { ...newSpec }],
      });
      setNewSpec({ label: "", value: "" });
    }
  };

  // Remove a spec
  const removeSpec = (index: number) => {
    const updatedSpecs = productForm.specs.filter((_, i) => i !== index);
    setProductForm({ ...productForm, specs: updatedSpecs });
  };

  // Handle product form submit
  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProduct) {
      // Update existing product
      setProductList(productList.map(p => 
        p.id === editingProduct.id ? { ...productForm } : p
      ));
    } else {
      // Add new product
      const newProduct: Product = {
        ...productForm,
        id: `product-${Date.now()}`, // Generate unique ID
      };
      setProductList([...productList, newProduct]);
    }
    
    setIsProductDialogOpen(false);
    setEditingProduct(null);
  };

  // Handle category form submit
  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingCategory) {
      // Update existing category
      setCategoryList(categoryList.map(c => 
        c.id === editingCategory.id ? { ...categoryForm } : c
      ));
    } else {
      // Add new category
      const newCategory: Category = {
        ...categoryForm,
        id: `category-${Date.now()}`, // Generate unique ID
      };
      setCategoryList([...categoryList, newCategory]);
    }
    
    setIsCategoryDialogOpen(false);
    setEditingCategory(null);
  };

  // Edit product
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsProductDialogOpen(true);
  };

  // Edit category
  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setIsCategoryDialogOpen(true);
  };

  // Delete product
  const handleDeleteProduct = (id: string) => {
    setProductList(productList.filter(p => p.id !== id));
  };

  // Delete category
  const handleDeleteCategory = (id: string) => {
    setCategoryList(categoryList.filter(c => c.id !== id));
    // Also remove products in this category
    setProductList(productList.filter(p => p.category !== id));
  };

  // Mark message as read
  const markMessageAsRead = (id: string) => {
    setMessageList(messageList.map(msg => 
      msg.id === id ? { ...msg, read: true } : msg
    ));
  };

  // Mark message as unread
  const markMessageAsUnread = (id: string) => {
    setMessageList(messageList.map(msg => 
      msg.id === id ? { ...msg, read: false } : msg
    ));
  };

  // Delete message
  const deleteMessage = (id: string) => {
    setMessageList(messageList.filter(msg => msg.id !== id));
    setIsMessageDialogOpen(false);
  };

  // View message details
  const viewMessage = (message: ContactMessage) => {
    setSelectedMessage(message);
    setIsMessageDialogOpen(true);
    if (!message.read) {
      markMessageAsRead(message.id);
    }
  };

  // Get unread messages count
  const unreadMessagesCount = messageList.filter(msg => !msg.read).length;

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container-custom">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <p className="text-muted-foreground">Manage your products and customer messages</p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 sm:mt-0 flex items-center gap-2"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Products
            </TabsTrigger>
            <TabsTrigger value="categories" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Categories
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Messages
              {unreadMessagesCount > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {unreadMessagesCount}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Product Management</CardTitle>
                  <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
                    <DialogTrigger asChild>
                      <Button onClick={() => setEditingProduct(null)}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Product
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>
                          {editingProduct ? "Edit Product" : "Add New Product"}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleProductSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Product Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={productForm.name}
                              onChange={handleProductFormChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="category">Category</Label>
                            <Select
                              name="category"
                              value={productForm.category}
                              onValueChange={(value) => 
                                setProductForm({...productForm, category: value})
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                {categoryList.map((category) => (
                                  <SelectItem key={category.id} value={category.id}>
                                    {category.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            name="description"
                            value={productForm.description}
                            onChange={handleProductFormChange}
                            rows={3}
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="image">Image URL</Label>
                            <Input
                              id="image"
                              name="image"
                              value={productForm.image}
                              onChange={handleProductFormChange}
                              placeholder="product-image.jpg"
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <input
                              id="featured"
                              name="featured"
                              type="checkbox"
                              checked={productForm.featured}
                              onChange={handleProductFormChange}
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="featured" className="ml-2">
                              Featured Product
                            </Label>
                          </div>
                          
                          <div className="flex items-center">
                            <input
                              id="latest"
                              name="latest"
                              type="checkbox"
                              checked={productForm.latest}
                              onChange={handleProductFormChange}
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="latest" className="ml-2">
                              Latest Product
                            </Label>
                          </div>
                        </div>
                        
                        {/* Product Specifications */}
                        <div>
                          <Label>Specifications</Label>
                          <div className="mt-2 space-y-2">
                            {productForm.specs.map((spec, index) => (
                              <div key={index} className="flex gap-2">
                                <Input
                                  placeholder="Label (e.g., Voltage)"
                                  value={spec.label}
                                  onChange={(e) => handleSpecChange(index, 'label', e.target.value)}
                                />
                                <Input
                                  placeholder="Value (e.g., 18V)"
                                  value={spec.value}
                                  onChange={(e) => handleSpecChange(index, 'value', e.target.value)}
                                />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                  onClick={() => removeSpec(index)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            ))}
                            <div className="flex gap-2">
                              <Input
                                placeholder="Label (e.g., Voltage)"
                                value={newSpec.label}
                                onChange={(e) => setNewSpec({ ...newSpec, label: e.target.value })}
                              />
                              <Input
                                placeholder="Value (e.g., 18V)"
                                value={newSpec.value}
                                onChange={(e) => setNewSpec({ ...newSpec, value: e.target.value })}
                              />
                              <Button
                                type="button"
                                variant="outline"
                                onClick={addSpec}
                              >
                                Add
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end space-x-2">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsProductDialogOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button type="submit">
                            {editingProduct ? "Update Product" : "Add Product"}
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Featured</TableHead>
                        <TableHead>Latest</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {productList.map((product) => {
                        const category = categoryList.find(c => c.id === product.category);
                        return (
                          <TableRow key={product.id}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{category?.name || product.category}</TableCell>
                            <TableCell>
                              {product.featured ? (
                                <Badge variant="default">Yes</Badge>
                              ) : (
                                <Badge variant="secondary">No</Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              {product.latest ? (
                                <Badge variant="default">Yes</Badge>
                              ) : (
                                <Badge variant="secondary">No</Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleEditProduct(product)}
                                >
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleDeleteProduct(product.id)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Categories Tab */}
          <TabsContent value="categories" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Category Management</CardTitle>
                  <Dialog open={isCategoryDialogOpen} onOpenChange={setIsCategoryDialogOpen}>
                    <DialogTrigger asChild>
                      <Button onClick={() => setEditingCategory(null)}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Category
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>
                          {editingCategory ? "Edit Category" : "Add New Category"}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleCategorySubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Category Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={categoryForm.name}
                              onChange={handleCategoryFormChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="id">Category ID</Label>
                            <Input
                              id="id"
                              name="id"
                              value={categoryForm.id}
                              onChange={handleCategoryFormChange}
                              required
                              placeholder="e.g., power-tools"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            name="description"
                            value={categoryForm.description}
                            onChange={handleCategoryFormChange}
                            rows={3}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="image">Image URL</Label>
                          <Input
                            id="image"
                            name="image"
                            value={categoryForm.image}
                            onChange={handleCategoryFormChange}
                            placeholder="category-image.jpg"
                          />
                        </div>
                        
                        <div className="flex justify-end space-x-2">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsCategoryDialogOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button type="submit">
                            {editingCategory ? "Update Category" : "Add Category"}
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category</TableHead>
                        <TableHead>ID</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {categoryList.map((category) => (
                        <TableRow key={category.id}>
                          <TableCell className="font-medium">{category.name}</TableCell>
                          <TableCell>{category.id}</TableCell>
                          <TableCell>{category.description}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleEditCategory(category)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDeleteCategory(category.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>From</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {messageList.map((message) => (
                        <TableRow key={message.id} className={message.read ? "" : "bg-muted/50"}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{message.name}</div>
                              <div className="text-sm text-muted-foreground">{message.email}</div>
                            </div>
                          </TableCell>
                          <TableCell>{message.subject}</TableCell>
                          <TableCell>{format(new Date(message.date), "MMM d, yyyy h:mm a")}</TableCell>
                          <TableCell>
                            {message.read ? (
                              <Badge variant="secondary">Read</Badge>
                            ) : (
                              <Badge variant="default">Unread</Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => viewMessage(message)}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              {message.read ? (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => markMessageAsUnread(message.id)}
                                >
                                  <EyeOff className="w-4 h-4" />
                                </Button>
                              ) : (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => markMessageAsRead(message.id)}
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                              )}
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => deleteMessage(message.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Message Detail Dialog */}
        <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {selectedMessage?.subject}
              </DialogTitle>
            </DialogHeader>
            {selectedMessage && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>From</Label>
                    <div className="mt-1">{selectedMessage.name}</div>
                  </div>
                  <div>
                    <Label>Email</Label>
                    <div className="mt-1">{selectedMessage.email}</div>
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <div className="mt-1">{selectedMessage.phone || "Not provided"}</div>
                  </div>
                  <div>
                    <Label>Date</Label>
                    <div className="mt-1">{format(new Date(selectedMessage.date), "MMMM d, yyyy h:mm a")}</div>
                  </div>
                </div>
                
                <div>
                  <Label>Message</Label>
                  <div className="mt-1 p-3 bg-muted rounded-md">
                    {selectedMessage.message}
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setIsMessageDialogOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminPanel;