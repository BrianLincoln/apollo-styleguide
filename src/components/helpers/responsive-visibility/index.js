import React from 'react';
import './styles.scss';

const ResponsiveVisibility = () => {
    return (
        <section className="space-bottom-xl responsive-visibility">
            <h2 className="font-title-md space-bottom-md">Responsive Visibility</h2>
            <table>
                <tr>
                    <th>class</th>
                    <th>
                        <div>current viewport</div>
                    </th>
                    <th>
                        <div>XS</div>
                        <div className="show-sm">&#60;480px</div>
                    </th>
                    <th>
                        <div>SM</div>
                        <div className="show-sm">&#8805;480px</div>
                    </th>
                    <th>
                        <div>MD</div>
                        <div className="show-sm">&#8805;768px</div>
                    </th>
                    <th>
                        <div>LG</div>
                        <div className="show-sm">&#8805;960px</div>
                    </th>
                    <th>
                        <div>XL</div>
                        <div className="show-sm">&#8805;1224px</div>
                    </th>
                </tr>
                <tr>
                    <td><code>.show-sm</code></td>
                    <td><span className="show-sm">&#x2714;</span></td>
                    <td>x</td>
                    <td>&#x2714;</td>
                    <td>&#x2714;</td>
                    <td>&#x2714;</td>
                    <td>&#x2714;</td>
                </tr>
                <tr>
                    <td><code>.show-md</code></td>
                    <td><span className="show-md">&#x2714;</span></td>
                    <td>x</td>
                    <td>x</td>
                    <td>&#x2714;</td>
                    <td>&#x2714;</td>
                    <td>&#x2714;</td>
                </tr>
                <tr>
                    <td><code>.show-lg</code></td>
                    <td><span className="show-lg">&#x2714;</span></td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>&#x2714;</td>
                    <td>&#x2714;</td>
                </tr>
                <tr>
                    <td><code>.show-xl</code></td>
                    <td><span className="show-xl">&#x2714;</span></td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>&#x2714;</td>
                </tr>
                <tr>
                    <td><code>.hide-sm</code></td>
                    <td><span className="hide-sm">&#x2714;</span></td>
                    <td>&#x2714;</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                </tr>
                <tr>
                    <td><code>.hide-md</code></td>
                    <td><span className="hide-md">&#x2714;</span></td>
                    <td>&#x2714;</td>
                    <td>&#x2714;</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                </tr>
                <tr>
                    <td><code>.hide-lg</code></td>
                    <td><span className="hide-lg">&#x2714;</span></td>
                    <td>&#x2714;</td>
                    <td>&#x2714;</td>
                    <td>&#x2714;</td>
                    <td>x</td>
                    <td>x</td>
                </tr>
                <tr>
                    <td><code>.hide-xl</code></td>
                    <td><span className="hide-xl">&#x2714;</span></td>
                    <td>&#x2714;</td>
                    <td>&#x2714;</td>
                    <td>&#x2714;</td>
                    <td>&#x2714;</td>
                    <td>x</td>
                </tr>
            </table>
        </section>
    );
};

export default ResponsiveVisibility;
