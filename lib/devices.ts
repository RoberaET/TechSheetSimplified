export type DeviceSpecs = Record<string, string>
export type Device = {
  id: string
  name: string
  model: string
  category: string
  series: string
  specs: DeviceSpecs
}
export type DeviceCategory = Record<string, Device[]> | Device[]
export type DeviceData = Record<string, DeviceCategory>

export const deviceData: DeviceData = {
  IdeaHubs: {
    "IdeaHub B Series": [
      {
        id: "ideahub-b2",
        name: "IdeaHub B2",
        model: "B2",
        category: "IdeaHubs",
        series: "IdeaHub B Series",
        specs: {
          display: '65": 4K UHD (3840 x 2160), 75": 4K UHD (3840 x 2160), 86": 4K UHD (3840 x 2160)',
          dimensions:
            '65": 1484.5mm × 91.6mm × 916.1mm, 75": 1705.7mm × 91.8mm × 1040.5mm, 86": 1953.0mm × 1953.0mm × 1180.6mm',
          backlight: "D-LED with zero-gap bonding",
          "viewing angle": "178°",
          "refresh rate": "60 Hz",
          "touch points": "20-point multi-touch",
          camera: "4K video output, 2x digital zoom, F/1.8 aperture, 80° horizontal/50° vertical view",
          "tv distortion": "< 2%",
          speaker: "2 × full frequency + 2 × high-frequency speakers, 30W max power, 100Hz-20kHz",
          microphone: "6 × 180° sound pickup, 10m range, 100Hz-20kHz",
          "wireless connection": "Dual Wi-Fi 2.4GHz/5GHz",
          processor: "4-core CPU",
          memory: "4GB RAM, 32GB Flash storage",
          os: "Android 9.0 / Windows 10 (with OPS)",
          "front ports": "USB Type-C × 1, USB Type-A 3.0 × 2",
          "side ports":
            "USB Type-A 3.0 × 1, USB Type-B × 1, HDMI IN × 2, HDMI OUT × 1, COM port × 1, RJ45 × 1, 80-pin OPS × 1, 3.5mm Line-in/out × 1 each",
          "meeting support": "Huawei Cloud Meeting: 1080p 25fps + 1080p 25fps / 1080p 15fps",
          projection: "Wireless up to 4K 30fps, Wired up to 4K 60fps, IdeaShare code/Key, NFC support",
          "supported clients": "Android / Windows / iOS / macOS",
          "writing latency": "≤25ms",
          "writing precision": "±1mm",
          "touch sensing": "≤1.5mm distance",
          "whiteboard saving": "QR code/Email/Local storage/USB flash drive",
          accessories:
            "Device × 1, Stylus pen × 2, Power cable × 1, Rolling Stand (optional), Wall bracket (optional), IdeaShare Key (optional), OPS (optional)",
        },
      },
      {
        id: "ideahub-b3",
        name: "IdeaHub B3",
        model: "B3",
        category: "IdeaHubs",
        series: "IdeaHub B Series",
        specs: {
          dimensions:
            '65": 916.1 mm x 1484.5 mm x 91.6 mm, 75": 1040.5 mm x 1705.7 mm x 91.8 mm, 86": 1180.6 mm x 1953.0 mm x 91.8 mm',
          "writing latency": "16 ms",
          components:
            'Device × 1, Stylus pen × 2, Cable × 1 power cable, OPS (Optional), Wall-mounted bracket (Optional for 65", 75", and 86"), Rolling stand (Optional for 65", 75", and 86"), IdeaShare Key (Optional Type-C/Type-A port)',
          camera: "4K resolution, 2x digital zoom, Max. angle of view Pan: 80°/Tilt: 50°",
          screen: "4K resolution, D-LED backlight type, Zero-gap bonding lamination",
          "wireless connection": "Wi-Fi 6 supported, 2.4 GHz + 5 GHz frequency, NFC supported",
          "ai features": "Auto-Framing supported, Speaker tracking supported, Two-person conversation supported",
          microphone: "180° sound pickup angle, 6 microphones, 10m sound pickup distance",
          system: "8-core CPU, 8GB RAM, 64GB Flash, HarmonyOS/Windows (OPS required)",
          language: "Chinese, English, French, Japanese, Spanish, Russian, Portuguese, and Italian",
          "meeting support": "Native meeting apps: Huawei Cloud Meeting Smart Rooms, BYOM supported",
          writing:
            "16 ms writing latency, QR code scanning/Email/Local storage/USB flash drive whiteboard saving, Supports recognition of Chinese, English, and 11 types of graphics, 1.5 mm touch sensing distance",
          "third-party meeting": "Huawei Cloud Meeting On-premises conference",
          "front ports": "1 × Type-C, 2 × USB 3.0",
          "side ports":
            "1 × USB 3.0, 2 × HDMI IN, 1 × HDMI OUT, 1 × COM port, 1 × 3.5 mm Line-out, 1 × 3.5 mm Line-in, 1 × RJ45 (10/100/1000 Mbit/s LAN)",
        },
      },
    ],
    "IdeaHub Board Series": [
      {
        id: "ideahub-board-2",
        name: "IdeaHub Board 2",
        model: "IHB2-65SU / IHB2-75SU / IHB2-86SU",
        category: "IdeaHubs",
        series: "IdeaHub Board Series",
        specs: {
          components:
            "Device × 1, Stylus pens × 2, Cables × 1 power cable, OPS Optional (i5/i7), Rolling stand/Wall-mounted bracket Optional, IdeaHub Controller Optional",
          resolution: "UHD 4K (3840 x 2160)",
          "backlight type": "D-LED",
          "screen lamination": "Zero-gap bonding",
          "optical anti-blue light": "Supported",
          "adaptive brightness": "Supported",
          "anti-glare": "Supported",
          "writing latency": "≤ 25 ms",
          "writing precision": "± 1 mm",
          "whiteboard saving mode": "QR code scanning/Email/Local disk/USB flash drive",
          "wireless projection effect": "Up to 4K 30fps",
          "wired projection effect": "4K 60 fps",
          "annotation during projection": "Supported",
          "reverse control": "Supported",
          "dual wi-fi module": "√",
          "wi-fi frequency": "2.4 GHz/5 GHz",
          "speaker frequency domain": "100 Hz to 20 kHz",
          "number of speaker units": "4",
          "stereo sound": "Supported",
          cpu: "4-core",
          ram: "4 GB",
          flash: "32 GB",
          os: "Android 9.0; Windows 10 (OPS required)",
          "front-panel ports": "USB Type-C × 1, USB Type-A 3.0 × 2",
          "side-panel ports":
            "USB Type-A 3.0 × 1, USB Type-B × 1, HDMI (input) × 2, HDMI (output) × 1, COM port × 1, RJ45 network port × 1, 80-pin OPS port × 1, 3.5 mm (line-in) × 1, 3.5 mm (line-out) × 1",
        },
      },
    ],
    "IdeaHub S2 Series": [
      {
        id: "ideahub-s2",
        name: "IdeaHub S2",
        model: "S2",
        category: "IdeaHubs",
        series: "IdeaHub S2 Series",
        specs: {
          "product dimensions":
            '65": 947.5 mm x 1484.5 mm x 91.6 mm, 75": 1071.9 mm x 1705.7 mm x 91.8 mm, 86": 1212.0 mm x 1953.0 mm x 91.8 mm',
          components:
            'Device × 1, Stylus pen × 2, Cable × 1 power cable, Rolling Stand (Optional for 65", 75", and 86"), Wall-mounted bracket (Optional for 65", 75", and 86"), IdeaShare Key (Optional Type-A port), OPS (Optional)',
          resolution: "4K (3840 x 2160 pixels)",
          "backlight type": "D-LED",
          lamination: "Zero-gap bonding",
          "writing latency": "16 ms",
          "touch sensing distance": "≤ 2 mm",
          "intelligent writing recognition": "Supports recognition of Chinese, English, and 11 types of graphics",
          "auto-framing": "√",
          "intelligent tracking": "√",
          "dnn-based dereverberation": "√",
          "acoustic baffle": "√",
          "speaker frequency domain": "100 Hz to 20 kHz",
          "number of speaker units": "4",
          "total speaker power": "40W",
          "microphone sound pickup angle": "180°",
          "microphone sound pickup distance": "12m",
          "microphone frequency domain": "80 Hz to 20 kHz",
          "optimized sound pickup": "Sound source location, echo cancellation, and automatic gain control",
          "wi-fi module": "Wi-Fi 6",
          "wi-fi frequency": "2.4 GHz + 5 GHz",
          nfc: "√",
          cpu: "8-core",
          ram: "8 GB",
          flash: "64 GB",
          os: "HarmonyOS, Windows (OPS required)",
          security:
            "Embedded encryption chip that supports H.235, STARTTLS, TLS, SRTP encryption, Chinese cryptographic algorithms, secure boot, and TEE",
          "native meeting": "Huawei Cloud Meeting On-premises conference",
          "dual streams":
            "On-premises conference: 1080p 30 fps + 1080p 30 fps/4K 8 fps, Huawei Cloud Meeting: 1080p 30 fps + 1080p 30 fps/4K 8 fps",
          byom: "√",
          "video input": "1 x HDMI (up to 4K)",
          "video output": "1 x HDMI (up to 4K)",
          "audio input": "1 x 3.5 mm LINE IN, 1 x HD-AI",
          "audio output": "1 x 3.5 mm LINE OUT",
          "other ports": "3 x USB Type-A 3.0, 1 x USB Type-C, 1 x RJ45 (10/100/1000 Mbit/s LAN)",
        },
      },
    ],
    IdeaPresence: [
      {
        id: "ideapresence-138",
        name: 'IdeaPresence 138"',
        model: 'IdeaPresence 138"',
        category: "IdeaHubs",
        series: "IdeaPresence",
        specs: {
          "display size": '138" (16:9)',
          "display resolution": "4K",
          "pixel density": "16 ppi",
          "max power consumption": "1787W",
          "minimum viewing distance": "2 m",
          components:
            "Device × 1, Cable × 1 power cable and 1 HDMI cable, Camera (Optional), Microphone (Optional), Wall-mount bracket/Rolling stand (Delivered with the device), Touch (Optional), UHD codec (Optional), IdeaShare Key (Optional)",
          "packaging process": "Flip-chip COB",
          "viewing angle": "170°/170° (Horizontal/Vertical)",
          "contrast ratio": "20,000:1",
          "black uniformity": "△E*ab ＜ 0.5",
          "pixel pitch": "P0.7",
          "gray level": "16 bits",
          "ag anti-glare": "Supported",
          brightness: "300–1000 nits (adjustable)",
          "protection level": "IP65 (front)",
          "color gamut": "≥ 85% BT.2020 & ≥ 99% sRGB",
          "color temperature": "5000–9500K (adjustable)",
          "refresh rate": "3840 Hz (64gray)",
          "led lifetime": "Up to 100,000 hours",
          "speaker quantity": "2 × 3 (stereo supported)",
          "rated power": "2 × 20 W + 20 W (per group)",
          "maximum volume": "95 dB",
          "frequency response": "60 Hz to 20 kHz",
          "dimensions rolling stand": "2564mm × 3054mm × 1034mm (H × W × D)",
          "dimensions wall-mounted": "1888mm × 3054mm × 147mm (H × W × D)",
          "power supply": "100 V AC to 240 V AC, 50/60 Hz",
          "operating humidity": "10% to 80%RH",
          "storage humidity": "10% to 80%RH",
          "audio video input port": "1 × HDMI (front)",
          "power supply port": "1 × power supply port",
          "dual-stream resolution": "4K 30 fps + 4K 30 fps",
          "doubled frame rate": "Supported (4K 60 fps)",
          "call bandwidth": "64 kbit/s to 8 Mbit/s",
          "meeting features":
            "Multistream meeting, SiteCall, Meeting control via web or Touch, Dual-band Wi-Fi (2.4 GHz and 5 GHz), HD image snapshot (16:9 and 4:3), PiP (small window: 1/16 of the main window in size and adjustable position), LDAP address book, Open APIs for third-party integration and development",
          security:
            "H.235/TLS encryption for signaling and SRTP encryption for media, Meeting access password, meeting control password, and administrator password, Dual-stream encryption",
        },
      },
      {
        id: "ideapresence-138-pro",
        name: 'IdeaPresence 138" Pro',
        model: 'IdeaPresence 138" Pro',
        category: "IdeaHubs",
        series: "IdeaPresence",
        specs: {
          "display size": '138" (16:9)',
          "display resolution": "4K",
          "pixel density": "32 ppi",
          "max power consumption": "1808W",
          "minimum viewing distance": "1 m",
          components:
            "Device × 1, Cable × 1 power cable and 1 HDMI cable, Camera (Optional), Microphone (Optional), Wall-mount bracket/Rolling stand (Delivered with the device), Touch (Optional), UHD codec (Optional), IdeaShare Key (Optional)",
          "packaging process": "Flip-chip COB",
          "viewing angle": "170°/170° (Horizontal/Vertical)",
          "contrast ratio": "20,000:1",
          "black uniformity": "△E*ab ＜ 0.5",
          "pixel pitch": "P0.7",
          "gray level": "16 bits",
          "ag anti-glare": "Supported",
          brightness: "300–1000 nits (adjustable)",
          "protection level": "IP65 (front)",
          "color gamut": "≥ 85% BT.2020 & ≥ 99% sRGB",
          "color temperature": "5000–9500K (adjustable)",
          "refresh rate": "3840 Hz (64gray)",
          "led lifetime": "Up to 100,000 hours",
          "speaker quantity": "2 × 3 (stereo supported)",
          "rated power": "2 × 20 W + 20 W (per group)",
          "maximum volume": "95 dB",
          "frequency response": "60 Hz to 20 kHz",
          "dimensions rolling stand": "2564mm × 3054mm × 1034mm (H × W × D)",
          "dimensions wall-mounted": "1888mm × 3054mm × 147mm (H × W × D)",
          "power supply": "100 V AC to 240 V AC, 50/60 Hz",
          "operating humidity": "10% to 80%RH",
          "storage humidity": "10% to 80%RH",
          "audio video input port": "1 × HDMI (front)",
          "power supply port": "1 × power supply port",
          "dual-stream resolution": "4K 30 fps + 4K 30 fps",
          "doubled frame rate": "Supported (4K 60 fps)",
          "call bandwidth": "64 kbit/s to 8 Mbit/s",
          "meeting features":
            "Multistream meeting, SiteCall, Meeting control via web or Touch, Dual-band Wi-Fi (2.4 GHz and 5 GHz), HD image snapshot (16:9 and 4:3), PiP (small window: 1/16 of the main window in size and adjustable position), LDAP address book, Open APIs for third-party integration and development",
          security:
            "H.235/TLS encryption for signaling and SRTP encryption for media, Meeting access password, meeting control password, and administrator password, Dual-stream encryption",
        },
      },
    ],
    "IdeaHub Camera 1080p": [],
    "IdeaHub Camera 4K": [],
    "IdeaHub Camera Pro": [],
    "IdeaHub Microphone": [],
  },
  SME: {
    "USG6000E Series": [],
    AR303: [],
    AR303W: [],
    "Core Router": [],
    S380: [],
    "Core switch": [
      {
        id: "ekitengine-s620",
        name: "eKitEngine S620-24T16X8Y2CZ",
        model: "S620-24T16X8Y2CZ",
        category: "SME",
        series: "Core switch",
        specs: {
          "fixed ports":
            "24 x 10/100/1000M BASE-T ports, 16 x 10GE SFP+ ports, 8 x 25GE SFP28 ports, 2 x 40GE/100GE QSFP28",
          usb: "Supported",
          "switching capacity": "1168Gbps",
          "packet forwarding rate": "867 Mpps",
          "expansion slot": "One slot reserved for expansion card",
          "chassis dimensions": "43.6 mm x 442.0 mm x 420.0 mm (H x W x D)",
          "chassis height": "1 U",
          "chassis weight": "6.31kg (excluding packaging materials)",
          "power supply type":
            "180 W AC power module, 240 W DC power module, 400 W DC power module, 600 W AC power module",
          "rated input voltage":
            "AC input: 100 V AC to 130 V AC, 200 V AC to 240 V AC, 50/60 Hz; High-voltage DC input: 240 V DC; DC input: –48 V DC to –60 V DC",
          "input voltage range":
            "AC input: 90 V AC to 290 V AC, 45 Hz to 65 Hz; High-voltage DC input: 190 V DC to 290 V DC; DC input: –38.4 V DC to –72 V DC",
          "typical power consumption": "122W",
          "maximum power consumption": "127W",
          "noise under normal temperature": "41.2 dBA (sound power)",
          "number of power slots": "2",
          "number of fans modules": "2",
          "types of fans": "Pluggable",
          "redundant power supply": "1+1 (Pluggable AC and DC power modules can be used together on the same device)",
          "long-term operating temperature": "–5°C to +45°C (23°F to 113°F)",
          "storage temperature": "–40°C to +70°C (–40°F to +158°F)",
          "relative humidity": "5% to 95% (non-condensing)",
          "power port surge protection":
            "AC power port: ±6 kV in differential mode, ±6 kV in common mode; DC power port: ±2 kV in differential mode, ±4 kV in common mode",
          "heat dissipation mode": "Air cooling, intelligent fan speed adjustment",
          "user management":
            "Unified user management, Traffic- and duration-based accounting, User authorization based on user groups, domains, and time ranges, 802.1X and MAC address authentication",
          mac: "Automatic MAC address learning and aging, Up to 64K MAC address entries, Static, dynamic, and blackhole MAC address entries, Source MAC address filtering, MAC address learning limiting based on ports and VLANs",
          vlan: "4K VLANs, Access, trunk, and hybrid ports, Default VLAN, QinQ and enhanced selective QinQ, VLAN stacking, MAC address–based dynamic VLAN allocation",
          "ip routing":
            "IPv4 dynamic routing protocols such as RIP, OSPF, IS-IS, and BGP; IPv6 dynamic routing protocols such as RIPng, OSPFv3, IS-ISv6, and BGP4+",
          "ipv6 features": "ND (Neighbor Discovery), Path MTU (PMTU), IPv6 ping, IPv6 tracert, and IPv6 Telnet",
          multicast:
            "IGMPv1/v2/v3 and IGMPv1/v2/v3 snooping, PIM DM, PIM SM, and PIM SSM, Fast leave mechanism for users, Multicast traffic control, Multicast querier, Multicast protocol packet suppression",
          qos: "Traffic classification based on Layer 2 headers, Layer 3 protocols, Layer 4 protocols, and 802.1p priority; Actions such as ACL, CAR, re-marking, and scheduling; Queue scheduling modes such as PQ, DRR, and PQ+DRR; Congestion avoidance mechanisms such as WRED and tail drop; Traffic shaping; Network slicing",
          "native-ip ifit":
            "Direct marking of service packets to obtain real-time statistics about dropped packets and packet loss rate, Two-way latency measurement for packets, Statistical interval modification",
          "ring network protection":
            "STP (IEEE 802.1d), RSTP (IEEE 802.1w), and MSTP (IEEE 802.1s), BPDU protection, root protection, and loop prevention, G.8032 Ethernet Ring Protection Switching (ERPS)",
          reliability:
            "M-LAG, Stacking, LACP and inter-device aggregation, Virtual Router Redundancy Protocol (VRRP) and Bidirectional Forwarding Detection (BFD) for VRRP, BFD for BGP, IS-IS, OSPF, and static routing, Ethernet OAM (IEEE 802.1ag), Smart Link",
          "system management":
            "Terminal access services such as console port login, Telnet, and SSH; Network management protocols, such as SNMPv1/v2/v3; File upload and download through FTP, TFTP, and SFTP; Boot Read-Only Memory (BootROM) upgrade and remote online upgrade; Hot patching; User operation logs; Open Programmability System (OPS); Streaming Telemetry",
          "security and management":
            "Network Access Control (NAC), RADIUS and HWTACACS authentication for user login, MAC security (MACsec), Command line authority control based on user levels, Defense against DoS attacks, TCP SYN flood attacks, UDP flood attacks, broadcast storms, and heavy-traffic attacks, IPv6 RA Guard, CPU hardware queues to implement hierarchical scheduling and protection for protocol packets on the control plane, Remote Network Monitoring (RMON)",
        },
      },
    ],
    "L2 Switch": [
      {
        id: "s110-series",
        name: "S110 Series",
        model: "S110",
        category: "SME",
        series: "L2 Switch",
        specs: {
          "switch type": "Layer 2 Managed Switch",
          "port configuration": "Various port configurations available",
          "switching capacity": "TBD",
          "packet forwarding rate": "TBD",
          "power consumption": "TBD",
          management: "Web-based management interface",
          "vlan support": "IEEE 802.1Q VLAN",
          qos: "Traffic prioritization support",
        },
      },
      {
        id: "s220-series",
        name: "S220 Series",
        model: "S220",
        category: "SME",
        series: "L2 Switch",
        specs: {
          "switch type": "Layer 2 Managed Switch",
          "port configuration": "Enhanced port configurations",
          "switching capacity": "TBD",
          "packet forwarding rate": "TBD",
          "power consumption": "TBD",
          management: "Advanced web-based management",
          "vlan support": "IEEE 802.1Q VLAN with advanced features",
          qos: "Enhanced QoS capabilities",
        },
      },
      {
        id: "s220s-series",
        name: "S220S Series",
        model: "S220S",
        category: "SME",
        series: "L2 Switch",
        specs: {
          "switch type": "Layer 2 Smart Managed Switch",
          "port configuration": "Smart port configurations",
          "switching capacity": "TBD",
          "packet forwarding rate": "TBD",
          "power consumption": "TBD",
          management: "Smart management interface",
          "vlan support": "IEEE 802.1Q VLAN with smart features",
          qos: "Smart QoS management",
        },
      },
    ],
    "L2+ Switch": [],
    "L3 Switch": [],
    "Access Controller": [],
    "Access Point": [],
  },
  Storage: {
    "ekitStorXtreme 200E": [],
    "Entry Level Storage": [],
    "OceanStor 5300 V5": [],
    "OceanStor 2600 V5": [],
  },
  "Mini FTTO": [],
}

export function getAllDevices(): Device[] {
  const result: Device[] = []
  for (const key of Object.keys(deviceData)) {
    const cat = deviceData[key]
    if (Array.isArray(cat)) {
      result.push(...cat)
    } else {
      for (const series of Object.keys(cat)) {
        result.push(...(cat as Record<string, Device[]>)[series])
      }
    }
  }
  return result
}

