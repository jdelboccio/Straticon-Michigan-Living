# Azure AD Setup for Michigan Living

## 1. Create Azure AD Application

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to "Azure Active Directory" > "App registrations" > "New registration"
3. Fill in the following:
   - Name: "Michigan Living"
   - Supported account types: "Single tenant"
   - Redirect URI: 
     - Type: "Web"
     - URL: `https://your-domain.com/api/auth/callback/azure-ad`
     - For local development: `http://localhost:3000/api/auth/callback/azure-ad`

## 2. Configure Authentication

1. In your app registration, go to "Authentication"
2. Under "Platform configurations" > "Web":
   - Add additional redirect URIs if needed
   - Check "Access tokens" and "ID tokens" under "Implicit grant"

## 3. Get Application Credentials

1. Go to "Overview" and note down:
   - Application (client) ID
   - Directory (tenant) ID
2. Go to "Certificates & secrets":
   - Create a new client secret
   - Copy the secret value immediately (you won't be able to see it again)

## 4. Configure Environment Variables

Create a `.env.local` file in your project root with:

```bash
# Azure AD Configuration
AZURE_AD_CLIENT_ID="your-client-id"
AZURE_AD_CLIENT_SECRET="your-client-secret"
AZURE_AD_TENANT_ID="your-tenant-id"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"  # For development
NEXTAUTH_SECRET="your-random-secret"   # Generate with: openssl rand -base64 32
```

For production, set these environment variables in your hosting platform (e.g., Vercel).

## 5. Configure API Permissions

1. Go to "API permissions"
2. Add the following permissions:
   - Microsoft Graph:
     - User.Read (delegated)
     - email (delegated)
     - offline_access (delegated)
     - openid (delegated)
     - profile (delegated)
3. Click "Grant admin consent" for your organization

## 6. Configure Token Configuration (Optional)

1. Go to "Token configuration"
2. Add the following optional claims:
   - ID token:
     - email
     - preferred_username

## Security Notes

- Only users with @straticon.com email addresses will be able to sign in
- The application is configured for single-tenant use only
- All authentication is handled through Azure AD
- User roles are assigned based on email patterns (admin vs regular users)
