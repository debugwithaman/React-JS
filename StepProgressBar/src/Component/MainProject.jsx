import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Confetti from 'react-confetti';  
import { useWindowSize } from 'react-use';  // ✅ Import correctly

function MainProject({ steps, activeSteps, setActiveStep }) {
    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize();  // ✅ Get screen size

    function handlePreviousStep() {
        if (activeSteps > 0) {
            toast.info(`Going on Previous Step: ${steps[activeSteps - 1]}`);
            setActiveStep(prevStep => Math.max(prevStep - 1, 0));
        }
    }

    function handleNextStep() {
        if (activeSteps < steps.length - 1) {
            setActiveStep(prevStep => {
                const newStep = prevStep + 1;
                toast.info(`Moving to Next Step: ${steps[newStep]}`);

                // ✅ Show confetti only when reaching the last step
                if (newStep === steps.length - 1) {
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 3000);
                }

                return newStep;
            });
        }
    }

    function calculateCurrentStepWidth() {
        return `${(100 / (steps.length - 1)) * activeSteps}%`;
    }

    return (
        <div>
            <ToastContainer position="top-right" autoClose={2000} />
            
            {/* ✅ Show confetti only when `showConfetti` is true */}
            {showConfetti && <Confetti width={width} height={height} />}

            <div className="steps">
                {steps.length > 0 ? 
                    steps.map((stepItem, index) => (
                        <div 
                            className={`step ${index <= activeSteps ? 'active' : ''}`} 
                            style={{ width: calculateCurrentStepWidth() }} 
                            key={stepItem}
                        >
                            {stepItem}
                        </div>
                    )) 
                    : <p>No steps available</p>
                }
            </div>

            <div className="step-btn-wrapper">
                <button disabled={activeSteps === 0} onClick={handlePreviousStep}>
                    Previous Step
                </button>
                <button disabled={activeSteps === steps.length - 1} onClick={handleNextStep}>
                    Next Step
                </button>
            </div>
        </div>
    );
}

export default MainProject;
