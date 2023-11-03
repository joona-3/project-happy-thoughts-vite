import formatDistance from 'date-fns/formatDistance'

export const TimeIndication = ({ time }) => {
    
  const timeResult = formatDistance(
    new Date(time),
    new Date(),
   { addSuffix: true },
) 

      return (
        <div className='time'>
            <p>
                {timeResult}</p>
            
        </div>
      )
}
