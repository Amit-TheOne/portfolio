"use client";

import { BlogTabs } from "./BlogTabs";
import { BlogsList } from "./BlogsList";
import { ArticlesList } from "./ArticlesList";
import React, { useState } from "react";

export const BlogsComponent = () => {
    const [selectedTab, setSelectedTab] = useState("articles");

    const handleTabSelect = (newTab: string) => {
        if (newTab !== selectedTab) {
            setSelectedTab(newTab);
        }
    };

    return (
        <div>
            <BlogTabs
                tabs={[
                    { label: "Articles", value: "articles" },
                    { label: "Blogs", value: "blogs" },
                ]}
                selected={selectedTab}
                onSelect={handleTabSelect}
            />

            {selectedTab === "articles" && <ArticlesList />}

            {selectedTab === "blogs" && <BlogsList />}
        </div>
    );
};
