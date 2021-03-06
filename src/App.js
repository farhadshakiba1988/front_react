import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import CustomLayout from "./containers/Layout";
import ArticleList from "./containers/ArticleListView";

function App() {
  return (
    <div className="App">
        <CustomLayout>
            <ArticleList/>
        </CustomLayout>
    </div>
  );
}

export default App;
