export const ListAnalize = ({numberOfTasks, numberOfDoneTasks}) => {
    return ( 
        <div className="listAnalize">
            <div className="circle">
                <p>{numberOfDoneTasks}/{numberOfTasks}</p>
            </div>
        </div>
    );
}