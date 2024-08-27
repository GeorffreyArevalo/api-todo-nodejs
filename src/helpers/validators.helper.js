

const TaskSates = ['Pending', 'Process', 'Finished'];

export const validateStateTask = ( state = '' ) => {
    if(state && !TaskSates.includes(state)){
        throw new Error(`El estado no es válido, solo permites los siguientes ${TaskSates.join(', ')}`);
    }
    return true;
}
