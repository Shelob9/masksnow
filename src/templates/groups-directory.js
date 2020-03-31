import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const GroupsDirectoryTemplate = ({
	title,
	content,
	contentComponent
}) => {
	const PageContent = contentComponent || Content;

	return (
		<section className="section section--gradient">
			<div className="container">
				<div className="columns">
					<div className="column is-10 is-offset-1">
						<div className="section">
							<h1 className="title is-size-3 has-text-weight-bold is-bold-light">
								{title}
							</h1>
							<PageContent className="content" content={content} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

GroupsDirectoryTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const GroupsDirectory = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<GroupsDirectoryTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				content={post.html}
			/>
		</Layout>
	);
};

GroupsDirectory.propTypes = {
	data: PropTypes.object.isRequired
};

export default GroupsDirectory;

export const aboutPageQuery = graphql`
	query GroupsDirectory($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
