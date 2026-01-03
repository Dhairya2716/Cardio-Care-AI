"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function DisclaimerPage() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[128px]" />

            <Card className="max-w-2xl glass border-orange-500/20 relative z-10">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <AlertTriangle className="h-8 w-8 text-orange-500" />
                    </div>
                    <CardTitle className="text-3xl">Medical Disclaimer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-justify text-muted-foreground leading-relaxed">
                    <p>
                        The CardioAI prediction tool is designed for educational and informational purposes only. The results provided by this application are based on statistical patterns found in historical data and should <strong>not</strong> be considered as a medical diagnosis.
                    </p>
                    <p>
                        Cardiovascular diseases are complex and influenced by numerous factors not covered by this model. A low risk score does not guarantee immunity, and a high risk score does not confirm disease.
                    </p>
                    <p className="text-white">
                        Always consult with a qualified healthcare professional for medical advice, diagnosis, or treatment. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
