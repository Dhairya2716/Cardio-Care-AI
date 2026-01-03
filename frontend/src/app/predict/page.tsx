"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, User, Ruler, HeartPulse, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    { id: 1, title: "Personal Details", icon: User },
    { id: 2, title: "Vitals & Habits", icon: Activity },
];

export default function PredictPage() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<null | { prediction: number; probability: number; risk_level: string }>(null);
    const [formData, setFormData] = useState({
        age: "",
        gender: "1", // 1: Women, 2: Men
        height: "",
        weight: "",
        ap_hi: "",
        ap_lo: "",
        cholesterol: "1",
        gluc: "1",
        smoke: "0",
        alco: "0",
        active: "1",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelect = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        setLoading(true);
        setResult(null);
        try {
            // Assuming Backend is running on port 8000
            const response = await fetch("http://localhost:8000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    age: parseInt(formData.age),
                    gender: parseInt(formData.gender),
                    height: parseInt(formData.height),
                    weight: parseFloat(formData.weight),
                    ap_hi: parseInt(formData.ap_hi),
                    ap_lo: parseInt(formData.ap_lo),
                    cholesterol: parseInt(formData.cholesterol),
                    gluc: parseInt(formData.gluc),
                    smoke: parseInt(formData.smoke),
                    alco: parseInt(formData.alco),
                    active: parseInt(formData.active),
                }),
            });
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error("Prediction failed:", error);
            alert("Failed to connect to the prediction server. Make sure the backend is running.");
        } finally {
            setLoading(false);
        }
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-rose-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-violet-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="w-full max-w-3xl z-10 relative">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                    <Card className="glass border-white/10 shadow-2xl">
                        <CardHeader>
                            <CardTitle className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-violet-500">
                                Health Assessment
                            </CardTitle>
                            {/* Progress Steps */}
                            <div className="flex justify-center mt-6 gap-4">
                                {steps.map((s) => (
                                    <div key={s.id} className={cn("flex items-center gap-2 px-4 py-2 rounded-full transition-all", step === s.id ? "bg-rose-500/20 text-rose-500 ring-1 ring-rose-500/50" : "text-muted-foreground")}>
                                        <s.icon size={16} />
                                        <span className="text-sm font-medium">{s.title}</span>
                                    </div>
                                ))}
                            </div>
                        </CardHeader>

                        <CardContent className="p-8">
                            {!result ? (
                                <AnimatePresence mode="wait">
                                    {step === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="space-y-6"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Age (Years)</label>
                                                    <Input name="age" type="number" placeholder="e.g. 45" value={formData.age} onChange={handleChange} className="bg-black/20 border-white/10 focus:border-rose-500" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Gender</label>
                                                    <div className="flex gap-4">
                                                        <button onClick={() => handleSelect("gender", "1")} className={cn("flex-1 py-2 rounded-md border text-sm transition-all", formData.gender === "1" ? "bg-rose-500 text-white border-rose-500" : "border-white/10 hover:bg-white/5")}>Female</button>
                                                        <button onClick={() => handleSelect("gender", "2")} className={cn("flex-1 py-2 rounded-md border text-sm transition-all", formData.gender === "2" ? "bg-blue-600 text-white border-blue-600" : "border-white/10 hover:bg-white/5")}>Male</button>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Height (cm)</label>
                                                    <Input name="height" type="number" placeholder="e.g. 175" value={formData.height} onChange={handleChange} className="bg-black/20 border-white/10 focus:border-rose-500" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Weight (kg)</label>
                                                    <Input name="weight" type="number" placeholder="e.g. 70" value={formData.weight} onChange={handleChange} className="bg-black/20 border-white/10 focus:border-rose-500" />
                                                </div>
                                            </div>
                                            <div className="flex justify-end pt-4">
                                                <Button onClick={nextStep} className="bg-gradient-to-r from-rose-600 to-rose-500">Next Step</Button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Systolic BP (ap_hi)</label>
                                                    <Input name="ap_hi" type="number" placeholder="e.g. 120" value={formData.ap_hi} onChange={handleChange} className="bg-black/20 border-white/10" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Diastolic BP (ap_lo)</label>
                                                    <Input name="ap_lo" type="number" placeholder="e.g. 80" value={formData.ap_lo} onChange={handleChange} className="bg-black/20 border-white/10" />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Cholesterol</label>
                                                    <select name="cholesterol" value={formData.cholesterol} onChange={handleChange} className="w-full h-10 rounded-md border border-white/10 bg-black/20 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500">
                                                        <option value="1">Normal</option>
                                                        <option value="2">Above Normal</option>
                                                        <option value="3">Well Above Normal</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Glucose</label>
                                                    <select name="gluc" value={formData.gluc} onChange={handleChange} className="w-full h-10 rounded-md border border-white/10 bg-black/20 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500">
                                                        <option value="1">Normal</option>
                                                        <option value="2">Above Normal</option>
                                                        <option value="3">Well Above Normal</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-4 pt-4">
                                                <label className="text-sm font-medium block">Lifestyle</label>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <button onClick={() => handleSelect("smoke", formData.smoke === "1" ? "0" : "1")} className={cn("p-4 rounded-xl border text-center transition-all", formData.smoke === "1" ? "bg-rose-500/20 border-rose-500 text-rose-500" : "border-white/10 hover:bg-white/5")}>
                                                        <div className="text-sm font-medium">Smoker</div>
                                                    </button>
                                                    <button onClick={() => handleSelect("alco", formData.alco === "1" ? "0" : "1")} className={cn("p-4 rounded-xl border text-center transition-all", formData.alco === "1" ? "bg-rose-500/20 border-rose-500 text-rose-500" : "border-white/10 hover:bg-white/5")}>
                                                        <div className="text-sm font-medium">Alcohol</div>
                                                    </button>
                                                    <button onClick={() => handleSelect("active", formData.active === "1" ? "0" : "1")} className={cn("p-4 rounded-xl border text-center transition-all", formData.active === "1" ? "bg-green-500/20 border-green-500 text-green-500" : "border-white/10 hover:bg-white/5")}>
                                                        <div className="text-sm font-medium">Active</div>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex justify-between pt-6">
                                                <Button variant="outline" onClick={prevStep}>Back</Button>
                                                <Button onClick={handleSubmit} disabled={loading} className="bg-gradient-to-r from-rose-600 to-rose-500 w-32">
                                                    {loading ? <Loader2 className="animate-spin" /> : "Analyze"}
                                                </Button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className={cn("mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6", result.risk_level === "High" ? "bg-red-500/20 ring-4 ring-red-500/30" : "bg-green-500/20 ring-4 ring-green-500/30")}>
                                        {result.risk_level === "High" ? <AlertCircle className="w-12 h-12 text-red-500" /> : <CheckCircle2 className="w-12 h-12 text-green-500" />}
                                    </div>
                                    <h2 className="text-3xl font-bold mb-2">{result.risk_level === "High" ? "High Risk Detected" : "Low Risk Detected"}</h2>
                                    <p className="text-muted-foreground mb-8 text-lg">
                                        Probability: <span className={cn("font-bold", result.risk_level === "High" ? "text-red-500" : "text-green-500")}>{(result.probability * 100).toFixed(1)}%</span>
                                    </p>

                                    <div className="bg-white/5 rounded-xl p-6 text-left max-w-sm mx-auto mb-8 border border-white/10">
                                        <h4 className="font-semibold mb-2 text-rose-400">Recommendation:</h4>
                                        <p className="text-sm text-gray-300">
                                            {result.risk_level === "High"
                                                ? "We strongly recommend consulting with a cardiologist for a thorough examination. Maintain a healthy diet and reduce stress."
                                                : "Keep up the good work! Maintain your active lifestyle and healthy habits to keep your risk low."}
                                        </p>
                                    </div>

                                    <Button onClick={() => setResult(null)} variant="outline" className="glass">
                                        New Assessment
                                    </Button>
                                </motion.div>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
