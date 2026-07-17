import React from "react";
import { Shield, ShieldAlert, Cpu, Terminal, Laptop, Globe, Server, Box, Chrome, Cloud, Database, Layout } from "lucide-react";

// Crisp brand image components using official assets
export const AppleLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/c5f36573-5979-419d-b7fb-6429e15bf571/macbook.png"
    alt="Apple"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

export const WindowsLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/1ef2d743-9a4d-4d1e-b520-076eaf30a00b/windows.png"
    alt="Windows"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

export const LinuxLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/3c134be7-269b-46f7-bb8d-09528191c17a/linux.svg"
    alt="Linux"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

export const RedHatLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/749bbd50-a830-4627-a29a-eba72bdbc286/redhat.png"
    alt="Red Hat"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

// Debian Logo fallback to beautiful inline SVG
export const DebianLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.003 2.002c-5.46 0-9.878 4.385-9.878 9.802 0 3.737 2.115 6.99 5.215 8.657v-2.295c-1.88-1.298-3.118-3.415-3.118-5.836.002-3.923 3.195-7.106 7.126-7.106 3.931 0 7.125 3.183 7.125 7.106 0 1.838-.707 3.518-1.868 4.793-1.077 1.185-2.613 1.957-4.331 1.957-2.316 0-4.2-1.748-4.2-3.896 0-.829.274-1.602.738-2.227 1.341-1.808 3.841-2.186 5.568-.842.348.271.631.62.83.992l1.642-.942c-.394-.748-.962-1.391-1.656-1.867-2.695-1.854-6.388-1.127-8.22 1.637-.678.918-1.066 2.052-1.066 3.247 0 3.514 2.977 6.376 6.622 6.376 3.645 0 6.623-2.862 6.623-6.376.002-5.417-4.416-9.802-9.802-9.802z"/>
  </svg>
);

export const DockerLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/3945e925-0615-487e-9eea-036cb5fe8014/docker.png"
    alt="Docker"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

export const ChromeLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/cd022ceb-8285-47d2-bcb5-b9c6807ffd72/chrome.png"
    alt="Chrome"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

export const CiscoLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/38ef2677-ddb7-41b5-8b8e-eb16b94f0deb/cisco.png"
    alt="Cisco"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

export const ApacheLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/bf043bfc-49af-4aef-8e1b-6a470aeb3fd0/apache.png"
    alt="Apache"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

export const FortinetLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/25b7aa06-4255-4a59-8fdc-52de51c57ad4/fortinate.png"
    alt="Fortinet"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

export const ZoomLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/59be45df-3260-4f6b-9bd2-c68deaef0476/zoom.png"
    alt="Zoom"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

// Postgres Logo from custom official asset
export const PostgreSqlLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/b1ba64e2-da7c-4fbc-9b1b-20254c32276e/pgsql.png"
    alt="PostgreSQL"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

export const CitrixLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/156c699b-4b9a-425d-977e-17396b767043/citrix.png"
    alt="Citrix"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

export const AndroidLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/bce239b4-ddb3-4035-9e44-52313249f71f/android.png"
    alt="Android"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

// High-fidelity vector Defendx corporate icon
export const DefendxLogo = ({ className, fill, stroke, ...props }: any) => (
  <img
    src="https://files.conzex.com/api/files/public/a8dcc6f0-db8e-42d2-a466-3db63379902a/Dx-Icon.png"
    alt="Defendx"
    className={className}
    referrerPolicy="no-referrer"
    {...props}
  />
);

// Main icon resolver mapping keywords or authors to dynamic inline SVGs
interface VendorIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export const VendorIcon = ({ name, ...props }: VendorIconProps) => {
  const lower = name.toLowerCase();

  if (lower.includes("apple") || lower.includes("macos") || lower.includes("macbook") || lower.includes("ios")) {
    return <AppleLogo {...props} />;
  }
  if (lower.includes("microsoft") || lower.includes("windows")) {
    return <WindowsLogo {...props} />;
  }
  if (lower.includes("android")) {
    return <AndroidLogo {...props} />;
  }
  if (lower.includes("debian")) {
    return <DebianLogo {...props} />;
  }
  if (lower.includes("red hat") || lower.includes("redhat")) {
    return <RedHatLogo {...props} />;
  }
  if (lower.includes("docker")) {
    return <DockerLogo {...props} />;
  }
  if (lower.includes("chrome") || lower.includes("google")) {
    return <ChromeLogo {...props} />;
  }
  if (lower.includes("cisco")) {
    return <CiscoLogo {...props} />;
  }
  if (lower.includes("apache")) {
    return <ApacheLogo {...props} />;
  }
  if (lower.includes("fortinet")) {
    return <FortinetLogo {...props} />;
  }
  if (lower.includes("zoom")) {
    return <ZoomLogo {...props} />;
  }
  if (lower.includes("postgresql") || lower.includes("pgsql")) {
    return <PostgreSqlLogo {...props} />;
  }
  if (lower.includes("citrix")) {
    return <CitrixLogo {...props} />;
  }
  if (lower.includes("linux") || lower.includes("ubuntu")) {
    return <LinuxLogo {...props} />;
  }

  // Fallback category items
  if (lower.includes("server")) {
    return <Server {...props} />;
  }
  if (lower.includes("network") || lower.includes("globe")) {
    return <Globe {...props} />;
  }
  if (lower.includes("database")) {
    return <Database {...props} />;
  }
  if (lower.includes("cloud")) {
    return <Cloud {...props} />;
  }
  if (lower.includes("container") || lower.includes("box")) {
    return <Box {...props} />;
  }

  // General threat fallbacks
  return <Shield {...props} />;
};
