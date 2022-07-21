import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { HomeScene, AboutUsScene, ConvertScene, UploadingScene, UploadScene, VerifyScene } from "@/scenes";
import { DownloadScene } from "@/scenes/download.scene";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path={switchRoutes.aboutUs} element={<AboutUsScene />} />
        <Route path={switchRoutes.convert} element={<ConvertScene />} />
        <Route path={switchRoutes.verify} element={<VerifyScene />} />
        <Route path={switchRoutes.uploading} element={<UploadingScene />} />
        <Route path={switchRoutes.upload} element={<UploadScene />} />
        <Route path={switchRoutes.download} element={<DownloadScene />} />
      </Routes>
    </Router>
  );
};
