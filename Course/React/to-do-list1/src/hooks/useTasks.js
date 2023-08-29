import {useMemo} from "react";

export const useSortedTasks = (tasks, sort) => {

    const sortedTasks =  useMemo(()=> {
        console.log("sorted done");
        if(sort) {
          return  [...tasks].sort((a, b) => String(a[sort]).localeCompare(String(b[sort])));
        }
        return tasks;
    
      }, [sort, tasks]);
     
      return sortedTasks;

}

export const useTasks = (tasks, sort, query) => {
    const sortedTasks = useSortedTasks(tasks, sort);

    const sortedAndSearchedTasks = useMemo(() => {
        return sortedTasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()));
 }, [query, sortedTasks])

 return sortedAndSearchedTasks;
}