import BasicInfo from '@/components/bookUploadSteps/basicInfo'
import AddBookImages from '@/components/bookUploadSteps/addBookImages'

import React from 'react'
import { Stepper, Step, Button } from '@material-tailwind/react'
import { HomeIcon, CogIcon, UserIcon } from '@heroicons/react/24/outline'

export default function BookUpload() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [isLastStep, setIsLastStep] = React.useState(false)
  const [isFirstStep, setIsFirstStep] = React.useState(false)

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1)
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1)

  const steps = [<BasicInfo />, <AddBookImages />]

  return (
    <div className="  w-full flex justify-center  px-2 md:px-4 my-0">
      <div className="w-3/4  ">
        <div className=" w-full h-[400px] flex justify-center">
          {steps[activeStep]}
        </div>
        {/* this below div need to be fixed on the bottm of screen and everything scroll under it */}{' '}
        <div className=" bottom-0 left-0 right-0 max-w-full mx-auto bg-white">
          <div className="mt-4 flex justify-between ">
            <Button onClick={handlePrev} disabled={isFirstStep}>
              Prev
            </Button>
            <Stepper
              activeStep={activeStep}
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
              placeholder=""
              activeLineClassName=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              className="mx-7 flex "
            >
              <Step className="h-0 w-0" onClick={() => setActiveStep(0)} />
              <Step className="h-0 w-0" onClick={() => setActiveStep(1)} />
              <Step className="h-0 w-0" onClick={() => setActiveStep(2)} />
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
