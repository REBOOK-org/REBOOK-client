// import React from 'react'

// export default function BookUpload() {
//   return <div>BookUpload</div>
// }
import BasicInfo from '@/components/bookUploadComp/basicInfo'
import React from 'react'
import { Stepper, Step, Button } from '@material-tailwind/react'
import { HomeIcon, CogIcon, UserIcon } from '@heroicons/react/24/outline'

export default function BookUpload() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [isLastStep, setIsLastStep] = React.useState(false)
  const [isFirstStep, setIsFirstStep] = React.useState(false)

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1)
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1)

  const steps = [<BasicInfo />]
  return (
    <div className="w-full flex justify-center p-6">
      <div class="w-3/4">
        <div className=" w-full h-[400px] flex justify-center">
          {activeStep === 0 && steps[activeStep]}
        </div>

        <div>
          <div className="mt-16 flex justify-between text-white p-4 ">
            <Button onClick={handlePrev} disabled={isFirstStep}>
              Prev
            </Button>
            <Stepper
              activeStep={activeStep}
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              className="mx-7"
            >
              <Step className="h-4 w-4" onClick={() => setActiveStep(0)} />
              <Step className="h-4 w-4" onClick={() => setActiveStep(1)} />
              <Step className="h-4 w-4" onClick={() => setActiveStep(2)} />
            </Stepper>
            <Button onClick={handleNext} disabled={isLastStep}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
