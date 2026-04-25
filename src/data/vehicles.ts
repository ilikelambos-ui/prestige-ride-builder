import suv from "@/assets/car-suv.jpg";
import sedan from "@/assets/car-sedan.jpg";
import coupe from "@/assets/car-coupe.jpg";
import truck from "@/assets/car-truck.jpg";
import accord from "@/assets/car-accord.jpg";
import tahoe from "@/assets/car-tahoe.jpg";
import porsche from "@/assets/hero-porsche.jpg";

export type Body = "All" | "SUV" | "Sedan" | "Truck" | "Coupe" | "Hatchback" | "Van";

export type Vehicle = {
  img: string;
  name: string;
  trim: string;
  price: string;
  year: number;
  miles: string;
  mpg: string;
  type: Exclude<Body, "All">;
  stk: string;
  justIn?: boolean;
  vin: string;
  exterior: string;
  interior: string;
  drivetrain: string;
  transmission: string;
  fuel: string;
  engine: string;
  features: string[];
  description: string;
};

export const vehicles: Vehicle[] = [
  {
    img: suv, name: "2021 BMW X5", trim: "xDrive40i", price: "$42,995", year: 2021, miles: "38,200", mpg: "20/26", type: "SUV", stk: "PR2401", justIn: true,
    vin: "5UXCR6C0XM9F12345", exterior: "Alpine White", interior: "Black Vernasca Leather", drivetrain: "AWD", transmission: "8-Spd Automatic", fuel: "Gasoline", engine: "3.0L Turbo I6",
    features: ["Panoramic Roof", "Heated Seats", "Apple CarPlay", "Harman Kardon Audio", "Adaptive Cruise", "Lane Keep Assist"],
    description: "Loaded xDrive40i with Premium Package. One owner, clean Carfax, fully serviced.",
  },
  {
    img: sedan, name: "2022 Mercedes-Benz C300", trim: "4MATIC", price: "$38,500", year: 2022, miles: "24,500", mpg: "23/32", type: "Sedan", stk: "PR2402", justIn: true,
    vin: "W1KAF4KB0NR123456", exterior: "Obsidian Black", interior: "Macchiato Beige MB-Tex", drivetrain: "AWD", transmission: "9-Spd Automatic", fuel: "Gasoline", engine: "2.0L Turbo I4",
    features: ["MBUX Infotainment", "Burmester Audio", "360° Camera", "Wireless Charging", "Heated Seats", "LED Headlights"],
    description: "Like-new C300 4MATIC with low miles and remaining factory warranty.",
  },
  {
    img: accord, name: "2020 Toyota Camry", trim: "SE", price: "$22,995", year: 2020, miles: "41,800", mpg: "28/39", type: "Sedan", stk: "PR2403",
    vin: "4T1G11AK0LU123456", exterior: "Celestial Silver", interior: "Black Sport Fabric", drivetrain: "FWD", transmission: "8-Spd Automatic", fuel: "Gasoline", engine: "2.5L I4",
    features: ["Toyota Safety Sense", "Apple CarPlay", "Android Auto", "Backup Camera", "Bluetooth", "Sport-Tuned Suspension"],
    description: "Reliable, fuel-efficient Camry SE with full service history.",
  },
  {
    img: truck, name: "2021 Ford F-150", trim: "XLT SuperCrew", price: "$39,500", year: 2021, miles: "35,600", mpg: "20/24", type: "Truck", stk: "PR2404", justIn: true,
    vin: "1FTFW1E50MFA12345", exterior: "Oxford White", interior: "Medium Earth Gray Cloth", drivetrain: "4x4", transmission: "10-Spd Automatic", fuel: "Gasoline", engine: "2.7L EcoBoost V6",
    features: ["Tow Package", "SYNC 4", "Bed Liner", "Trailer Brake Controller", "Pro Trailer Backup Assist", "Backup Camera"],
    description: "Capable XLT SuperCrew 4x4 with EcoBoost V6 — work-ready and family-friendly.",
  },
  {
    img: accord, name: "2022 Honda Accord", trim: "Sport", price: "$28,900", year: 2022, miles: "19,200", mpg: "30/38", type: "Sedan", stk: "PR2405",
    vin: "1HGCV1F36NA123456", exterior: "Modern Steel Metallic", interior: "Black Cloth", drivetrain: "FWD", transmission: "CVT", fuel: "Gasoline", engine: "1.5L Turbo I4",
    features: ["Honda Sensing", "Sport Pedals", "19\" Wheels", "Apple CarPlay", "Android Auto", "Heated Seats"],
    description: "Low-mile Accord Sport with Honda Sensing safety suite.",
  },
  {
    img: tahoe, name: "2019 Chevrolet Tahoe", trim: "LT", price: "$35,500", year: 2019, miles: "52,300", mpg: "15/22", type: "SUV", stk: "PR2406",
    vin: "1GNSKBKC0KR123456", exterior: "Black", interior: "Jet Black Leather", drivetrain: "4WD", transmission: "6-Spd Automatic", fuel: "Gasoline", engine: "5.3L V8",
    features: ["3rd Row Seating", "Heated Seats", "Bose Audio", "Power Liftgate", "Tow Package", "Remote Start"],
    description: "8-passenger Tahoe LT 4WD — perfect family hauler with V8 power.",
  },
  {
    img: coupe, name: "2021 BMW M4", trim: "Competition", price: "$72,400", year: 2021, miles: "21,300", mpg: "16/23", type: "Coupe", stk: "PR2407",
    vin: "WBS43AY00MFK12345", exterior: "Sao Paulo Yellow", interior: "Black Merino Leather", drivetrain: "RWD", transmission: "8-Spd Automatic", fuel: "Premium Gasoline", engine: "3.0L Twin-Turbo I6",
    features: ["Carbon Fiber Roof", "M Sport Brakes", "Heads-Up Display", "Harman Kardon", "Track Mode", "Heated Steering"],
    description: "Stunning M4 Competition with 503hp, eye-catching color, and full service records.",
  },
  {
    img: porsche, name: "2020 Porsche 911", trim: "Carrera S", price: "$118,900", year: 2020, miles: "18,400", mpg: "18/24", type: "Coupe", stk: "PR2408", justIn: true,
    vin: "WP0AB2A99LS123456", exterior: "GT Silver Metallic", interior: "Black Leather", drivetrain: "RWD", transmission: "8-Spd PDK", fuel: "Premium Gasoline", engine: "3.0L Twin-Turbo Flat-6",
    features: ["Sport Chrono", "PASM", "BOSE Surround", "Sport Exhaust", "20/21\" Wheels", "Heated/Cooled Seats"],
    description: "992-generation 911 Carrera S — pristine, low miles, Sport Chrono equipped.",
  },
  {
    img: suv, name: "2022 Range Rover Sport", trim: "HSE", price: "$78,500", year: 2022, miles: "26,100", mpg: "18/23", type: "SUV", stk: "PR2409",
    vin: "SALWR2SU0NA123456", exterior: "Santorini Black", interior: "Ebony Windsor Leather", drivetrain: "4WD", transmission: "8-Spd Automatic", fuel: "Premium Gasoline", engine: "3.0L Supercharged V6",
    features: ["Air Suspension", "Meridian Audio", "Pano Roof", "Heated/Cooled Seats", "Terrain Response", "Adaptive Cruise"],
    description: "Loaded HSE with air suspension, Meridian audio, and full off-road capability.",
  },
];

export const getVehicleByStk = (stk: string) => vehicles.find((v) => v.stk.toLowerCase() === stk.toLowerCase());
