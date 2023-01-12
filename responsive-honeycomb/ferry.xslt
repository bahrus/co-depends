<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <!-- <xsl:template match="@*|node()">
        <ul class="honeycomb" lang="es">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
        </ul>
    </xsl:template> -->
    <xsl:template match="@*|node()">
        <ul class="honeycomb" lang="es">
        <xsl:copy>
            <xsl:apply-templates select="//img-ish"/>
        </xsl:copy>
        </ul>
    </xsl:template>

    <xsl:template match="//img-ish">
                <li class="honeycomb-cell">
                <xsl:copy-of select="."/>
                <div class="honeycomb-cell__title">Diseño exclusivo</div>
            </li>
    </xsl:template>
</xsl:stylesheet>