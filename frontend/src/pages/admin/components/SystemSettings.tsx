
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings, Database, Mail, Shield } from "lucide-react";

const SystemSettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            General Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="siteName">Site Name</Label>
              <Input id="siteName" value="Food App" />
            </div>
            <div>
              <Label htmlFor="siteUrl">Site URL</Label>
              <Input id="siteUrl" value="https://yoursite.com" />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label>Maintenance Mode</Label>
              <p className="text-sm text-gray-600">Enable to put site in maintenance mode</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>User Registration</Label>
              <p className="text-sm text-gray-600">Allow new users to register</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Security Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Two-Factor Authentication</Label>
              <p className="text-sm text-gray-600">Require 2FA for admin accounts</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Password Strength</Label>
              <p className="text-sm text-gray-600">Enforce strong password requirements</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div>
            <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
            <Input id="sessionTimeout" type="number" value="30" className="w-32" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            Email Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="smtpHost">SMTP Host</Label>
              <Input id="smtpHost" placeholder="smtp.example.com" />
            </div>
            <div>
              <Label htmlFor="smtpPort">SMTP Port</Label>
              <Input id="smtpPort" type="number" placeholder="587" />
            </div>
          </div>

          <div>
            <Label htmlFor="fromEmail">From Email</Label>
            <Input id="fromEmail" type="email" placeholder="noreply@yoursite.com" />
          </div>

          <Button variant="outline">Test Email Configuration</Button>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save Settings</Button>
      </div>
    </div>
  );
};

export default SystemSettings;
