const CoursesData= {
    Active: ['C','Java Full Stack','Python Full Stack','MERN','Dev Tools'],
    Inactive: ['Power BI', 'UI', 'UX', 'AWS'],
    Both: function (){
        return [...this.Active,...this.Inactive]
    }
}


export default CoursesData;